import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-publication-item',
  templateUrl: './publication-item.component.html',
  styleUrls: ['./publication-item.component.scss'],

})
export class PublicationItemComponent implements OnInit {

  @Input('title') title: string = 'Una publicacion';
  @Input('body') body: string = 'Este es el body de una publicacion';
  @Input('date-pub') datePub: string = '10-07-2019 12:00:00';

  constructor() { }

  ngOnInit() {

  }



}
