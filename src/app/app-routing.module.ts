import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EventsComponent } from './components/events/events.component';
import { SupportNcmComponent } from './components/support-ncm/support-ncm.component';
import { GetInvolvedComponent } from './components/get-involved/get-involved.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'support-ncm',
    component: SupportNcmComponent
  },
  {
    path: 'get-involved',
    component: GetInvolvedComponent
  },
  {
    path: 'about-ncm',
    component: AboutUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
