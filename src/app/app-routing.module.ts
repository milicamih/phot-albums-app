import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsPageComponent } from './albums-page/albums-page.component';
import { PhotosPageComponent } from './photos-page/photos-page.component';
import { PageNotFoundComponent } from './shared/page-not-found.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AlbumsPageComponent
  },
  {
    path: 'photos',
    component: PhotosPageComponent
  },
  {
    path: '**',
    component: AlbumsPageComponent
  },
  {
    path: ' ',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
