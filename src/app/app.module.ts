import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CompanionsListComponent } from './companions-list/companions-list.component';
import { CompanionItemComponent } from './companions-list/companion-item/companion-item.component';
import { CompanionDetailsComponent } from './companions-list/companion-details/companion-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    CompanionsListComponent,
    CompanionItemComponent,
    CompanionDetailsComponent,
    DashboardComponent,
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

