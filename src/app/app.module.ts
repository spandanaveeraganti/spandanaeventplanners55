import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PackagesComponent } from './packages/packages.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ContactusComponent } from './contactus/contactus.component';
import { BookComponent } from './book/book.component';
import { BirthdayComponent } from './packages/birthday/birthday.component';
import { SocialeventsComponent } from './packages/socialevents/socialevents.component';
import { WeddingComponent } from './packages/wedding/wedding.component';
import { CoorparatemeetingsComponent } from './packages/coorparatemeetings/coorparatemeetings.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    PackagesComponent,
    FeedbackComponent,
    ContactusComponent,
    BookComponent,
    BirthdayComponent,
    SocialeventsComponent,
    WeddingComponent,
    CoorparatemeetingsComponent,
    PagenotfoundComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
