import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
// THIRD SIDE LIBRARIES----------------------------------------------------
import { AngularFontAwesomeModule } from 'angular-font-awesome';
// COMPONENTS------------------------------------------------------------
import { AppComponent } from './app.component';
import { AlbumsPageComponent } from './albums-page/albums-page.component';
import { PhotosPageComponent } from './photos-page/photos-page.component';
import { PageNotFoundComponent } from './shared/page-not-found.component';
import { CapitalizeFirstLetterPipe } from './shared/pipes/capitalizeFirstLetter';
import { FilterPipe} from './shared/pipes/filterPipe';


@NgModule({
  declarations: [
    AppComponent,
    AlbumsPageComponent,
    PhotosPageComponent,
    PageNotFoundComponent,
    CapitalizeFirstLetterPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
