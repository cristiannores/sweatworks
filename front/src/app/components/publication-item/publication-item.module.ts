import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicationItemComponent } from './publication-item.component'; 
import {MatTabsModule, MatIconModule, MatCardModule} from '@angular/material';
@NgModule({
  declarations: [PublicationItemComponent],
  imports: [
    CommonModule, 
    MatTabsModule,
    MatIconModule,
    MatCardModule
  ],
  exports : [
  
    PublicationItemComponent
  ]
})
export class PublicationItemModule { }
