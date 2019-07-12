import { Component, OnInit, ViewChild, AfterContentInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { AuthorsService } from 'src/app/services/authors.service';
import { PublicationsService } from 'src/app/services/publications.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public authors: Array<any> = [];
  public publications: Array<any> = [];

  public authorSelected: string = '';
  public searchForm: FormGroup;
 

  public publicationsCount: number = 0;

  public pageEvent: PageEvent;
  public pageSize : number = 3; 
  public pageIndex : number = 0;


  @ViewChild('drawer', { static: true }) drawer: any;

  constructor(
    private authorsService: AuthorsService,
    private publicationsService: PublicationsService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.getAuthors();
    setTimeout(() => {
      this.drawer.toggle();
      this.buildForm();
    }, 1000);

  }


  buildForm() {
    this.searchForm = this.fb.group({
      title: [''],
      order: ['']
    });
  }

  getAuthors() {
    this.authorsService.findAll().subscribe((authors: any) => {
      this.authors = authors;
    }, () => {
      this.authors = [];
    });
  }

  selectAuthor(authorId: string) {

    this.searchForm.reset();
    if ( this.pageEvent ){
      this.pageEvent.pageIndex = 0;
    }
    this.getPublications(authorId);
  }
  getPublications(userId: string, title: string = '', order: string = '') {


    let pagination = { limit : this.pageSize, page : 1 };
 
    if ( this.pageEvent ){
      pagination.limit = this.pageEvent.pageSize;
      pagination.page = this.pageEvent.pageIndex + 1;
    } 

    this.publicationsService.findByAuthor(userId, title, order, { limit : pagination.limit, page : pagination.page }).subscribe((publications: any) => {
      this.authorSelected = userId;
      this.publications = publications.Items;
      this.publicationsCount = publications.count;
      console.log(publications);
    }, () => {

    });
  }

  searchPublications(event: any) {
    event.preventDefault();
    if (this.authorSelected !== '') {
      this.getPublications(this.authorSelected, this.searchForm.value.title, this.searchForm.value.order);
    }

    console.log(this.pageEvent);
  }

  pageChange(event: any) {
    this.pageEvent = event; 
    if (this.authorSelected !== '') {
      this.getPublications(this.authorSelected, this.searchForm.value.title, this.searchForm.value.order);
    }
  }
}
