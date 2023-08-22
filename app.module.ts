import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeaveAppComponent } from './leaveapp/leaveapp.component'
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { AgGridModule } from 'ag-grid-angular';
import { TableComponent } from './table/table.component';
import { ColDef } from 'ag-grid-community';
import { LandingPageComponent } from './landing-page/landing-page.component';




@NgModule({
  declarations: [
    AppComponent,
    LeaveAppComponent,
    TableComponent,
    LandingPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgGridModule
  ],
  providers: [
    { provide: HttpClient, useClass: HttpClient }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
