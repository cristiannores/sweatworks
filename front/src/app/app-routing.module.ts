import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: 'publications',
  loadChildren : ()=> import('./modules/publications/publications.module').then( m => m.PublicationsModule)
},
{
  path : '**',
  redirectTo: 'publications/list'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
