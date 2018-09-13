import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from './auth/signin/signin.component';
import { ItineraryComponent } from './itinerary/itinerary.component';
import { SelectComponent } from './select/select.component';
import { SetupComponent } from './setup/setup.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ProfileComponent } from './profile/profile.component';
import { ParamsComponent } from './params/params.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import { MyCounterComponent } from './MyCounterComponent';

const appRoutes: Routes = [
  { path: 'select', component: SelectComponent, canActivate: [AuthGuard]  },
  { path: 'feedback/:id/:name', component: FeedbackComponent, canActivate: [AuthGuard]  },
  { path: 'profile', component: SetupComponent, canActivate: [AuthGuard]  },
  { path: 'params', component: ParamsComponent, canActivate: [AuthGuard]  },
  { path: 'counter', component: MyCounterComponent},
  { path: 'login', component: SigninComponent},
  { path: 'home', component: ItineraryComponent, canActivate: [AuthGuard]  },
    // { path: 'signout', component: SigninComponent},
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
