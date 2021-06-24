import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BookComponent } from './book/book.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { BirthdayComponent } from './packages/birthday/birthday.component';
import { CoorparatemeetingsComponent } from './packages/coorparatemeetings/coorparatemeetings.component';
import { PackagesComponent } from './packages/packages.component';
import { SocialeventsComponent } from './packages/socialevents/socialevents.component';
import { WeddingComponent } from './packages/wedding/wedding.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"gallery",component:GalleryComponent},
  {path:"feedback",component:FeedbackComponent},
  {path:"contactus",component:ContactusComponent},
  {path:"book",component:BookComponent},
  {path:"packages",component:PackagesComponent,children:[
    {path:"birthday",component:BirthdayComponent},
    {path:"socialevents",component:SocialeventsComponent},
    {path:"wedding",component:WeddingComponent},
    {path:"coorparatemeetings",component:CoorparatemeetingsComponent},

  ]},
  {path:"**",component:PagenotfoundComponent},
  {path:"footer",component:FooterComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
