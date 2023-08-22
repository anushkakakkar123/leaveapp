import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaveAppComponent } from './leaveapp/leaveapp.component';
import { TableComponent } from './table/table.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' }, // Redirect to leaveapp on default route
  { path: 'leaveapp', component: LeaveAppComponent },
  { path: 'table', component: TableComponent },
  {path: 'landing', component:LandingPageComponent}
];

 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}