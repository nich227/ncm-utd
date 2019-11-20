import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EventsComponent } from './components/events/events.component';
import { SupportNcmComponent } from './components/support-ncm/support-ncm.component';
import { GetInvolvedComponent } from './components/get-involved/get-involved.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { SundayReadingComponent } from './components/sunday-reading/sunday-reading.component';
import { SigninFormComponent } from './components/signin-form/signin-form.component';
import { StoreComponent } from './components/store/store.component';

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
  },
  {
    path: 'sunday-reading',
    component: SundayReadingComponent
  },
  {
    path: 'signin-form', 
    component: SigninFormComponent
  },
  {
    path: 'store',
    component: StoreComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
