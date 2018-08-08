import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItineraryComponent } from './itinerary/itinerary.component';
import { SelectComponent } from './select/select.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ProfileComponent } from './profile/profile.component';
import { ParamsComponent } from './params/params.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
    { path: '', component: ItineraryComponent},
    { path: 'select', component: SelectComponent},
    { path: 'feedback/:id/:name', component: FeedbackComponent},
    { path: 'profile', component: ProfileComponent},
    { path: 'params', component: ParamsComponent},
    { path: 'not-found', component: NotFoundComponent},
    { path: '**', redirectTo: '/not-found' }
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
      ],
      exports: [RouterModule]
})

export class AppRoutingModule {

}
