import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LawyerListComponent} from "./public/pages/lawyer-list/lawyer-list.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {ProfileComponent} from "./public/pages/profile/profile.component";
import {EditProfileComponent} from "./public/pages/edit-profile/edit-profile.component";
import {SubscriptionComponent} from "./public/pages/subscription/subscription.component";
import {SummarySectionComponent} from "./public/pages/summary-section/summary-section.component";
import {SignInComponent} from "./public/pages/sign-in/sign-in.component";
import {SignUpComponent} from "./public/pages/sign-up/sign-up.component";
import {
  EducationalResourceComponent
} from "./educational-resource/pages/educational-resource/educational-resource.component";


const routes: Routes = [
  { path: 'Lawyers', component: LawyerListComponent },
  {path: 'sign-in', component: SignInComponent},
  {path: 'sign-up', component: SignUpComponent},
  { path: 'profile', component:ProfileComponent},
  { path: 'edit-profile', component:EditProfileComponent},
  { path: '', redirectTo: 'sign-in', pathMatch: 'full'},
  { path: 'Subscription', component: SubscriptionComponent},
  { path: 'summary', component: SummarySectionComponent },
  { path: 'educational resource', component: EducationalResourceComponent},

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
