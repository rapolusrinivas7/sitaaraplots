import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmenitiesComponent } from './amenities/amenities.component';
import { DescriptionComponent } from './description/description.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { LocationDetailsComponent } from './location-details/location-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SiteLayoutComponent } from './site-layout/site-layout.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'description',component:DescriptionComponent},
  {path:'amenities',component:AmenitiesComponent},
  {path:'sitelayout',component:SiteLayoutComponent},
  {path:'location',component:LocationDetailsComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
