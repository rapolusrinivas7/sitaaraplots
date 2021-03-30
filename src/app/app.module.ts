import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DescriptionComponent } from './description/description.component';
import { AmenitiesComponent } from './amenities/amenities.component';
import { SiteLayoutComponent } from './site-layout/site-layout.component';
import { LocationDetailsComponent } from './location-details/location-details.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    DescriptionComponent,
    AmenitiesComponent,
    SiteLayoutComponent,
    LocationDetailsComponent,
    GalleryComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    CarouselModule,
    BrowserAnimationsModule,
     RouterModule.forRoot([]),
  ],
  providers: [GalleryComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
