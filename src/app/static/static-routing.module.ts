import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

const routes : Routes = [
  {path: 'header', component:HeaderComponent},
  {path: 'footer', component:FooterComponent}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class StaticRoutingModule { }
