import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ImageUploadModule } from 'angular2-image-upload';


import { AppComponent } from './app.component';
import { CompanionsListComponent } from './companions-list/companions-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SelectComponent } from './select/select.component';
import { ParamsComponent } from './params/params.component';
import { ProfileComponent } from './profile/profile.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ItineraryComponent } from './itinerary/itinerary.component';
import { CompanionDetailsComponent } from './companion-details/companion-details.component';
import { HighlightDirective } from './directives/highlight.directive';
import { CustomUnlessDirective } from './directives/customUnless.directive';
import { DataService } from './services/data.service';
import { LoggingService } from './services/logging.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { SetupComponent } from './setup/setup.component';
import { PrefsComponent } from './prefs/prefs.component';


@NgModule({
  declarations: [
    AppComponent,
    CompanionsListComponent,
    DashboardComponent,
    HighlightDirective,
    CustomUnlessDirective,
    SelectComponent,
    ParamsComponent,
    ProfileComponent,
    FeedbackComponent,
    ItineraryComponent,
    CompanionDetailsComponent,
    NotFoundComponent,
    SetupComponent,
    PrefsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ImageUploadModule.forRoot(),
  ],
  providers: [DataService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }

