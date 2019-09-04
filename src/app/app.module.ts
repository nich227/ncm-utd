import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { EventsComponent } from './components/events/events.component';
import { SupportNcmComponent } from './components/support-ncm/support-ncm.component';
import { GetInvolvedComponent } from './components/get-involved/get-involved.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { SundayReadingComponent } from './components/sunday-reading/sunday-reading.component';
import { SigninFormComponent } from './components/signin-form/signin-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    EventsComponent,
    SupportNcmComponent,
    GetInvolvedComponent,
    AboutUsComponent,
    SundayReadingComponent,
    SigninFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
