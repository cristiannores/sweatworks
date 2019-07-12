import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicationsRoutingModule } from './publications-routing.module';
import { ListComponent } from './list/list.component'; 
  
import { PublicationItemModule } from 'src/app/components/publication-item/publication-item.module';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { PublicationsService } from 'src/app/services/publications.service';
import { AuthorsService } from 'src/app/services/authors.service';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    PublicationsRoutingModule, 
    MatListModule,   
    PublicationItemModule,
    MatSidenavModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule
  ], 
  providers : [
    PublicationsService, 
    AuthorsService
  ]
})
export class PublicationsModule { }
