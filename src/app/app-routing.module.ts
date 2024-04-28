import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LawyerListComponent} from "./public/pages/lawyer-list/lawyer-list.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {SuscriptionsComponent} from "./public/pages/suscriptions/suscriptions.component";

const routes: Routes = [
  { path: 'abogados', component: LawyerListComponent },
  { path: '', redirectTo: 'abogados', pathMatch: 'full'},
  { path: 'suscripcion', component: SuscriptionsComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
