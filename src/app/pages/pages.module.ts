import { StaticModule } from './../static/static.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent
  ],
  exports:[
    DashboardComponent
  ],
  imports: [
    CommonModule,
    StaticModule
  ]
})
export class PagesModule { }
