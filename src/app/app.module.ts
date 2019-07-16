import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
//COMPONENTS------------------------------------------------------------
import { AppComponent } from './app.component';
import { AlbumsPageComponent } from './albums-page/albums-page.component';
import { PhotosPageComponent } from './photos-page/photos-page.component';
import { PageNotFoundComponent } from './shared/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsPageComponent,
    PhotosPageComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
