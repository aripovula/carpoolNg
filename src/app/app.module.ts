import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CompanionsListComponent } from './companions-list/companions-list.component';
import { CompanionItemComponent } from './companions-list/companion-item/companion-item.component';
import { CompanionDetailsComponent } from './companions-list/companion-details/companion-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SelectComponent } from './select/select.component';
import { ParamsComponent } from './params/params.component';
import { ProfileComponent } from './profile/profile.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ItineraryComponent } from './itinerary/itinerary.component';


@NgModule({
  declarations: [
    AppComponent,
    CompanionsListComponent,
    CompanionItemComponent,
    CompanionDetailsComponent,
    DashboardComponent,
    SelectComponent,
    ParamsComponent,
    ProfileComponent,
    FeedbackComponent,
    ItineraryComponent,
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

