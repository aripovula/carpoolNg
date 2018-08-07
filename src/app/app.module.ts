import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CompanionsListComponent } from './companions-list/companions-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SelectComponent } from './select/select.component';
import { ParamsComponent } from './params/params.component';
import { ProfileComponent } from './profile/profile.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ItineraryComponent } from './itinerary/itinerary.component';
import { CompanionDetailsComponent } from './companion-details/companion-details.component';


@NgModule({
  declarations: [
    AppComponent,
    CompanionsListComponent,
    DashboardComponent,
    SelectComponent,
    ParamsComponent,
    ProfileComponent,
    FeedbackComponent,
    ItineraryComponent,
    CompanionDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

