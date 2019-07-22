import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsPageComponent } from './albums-page/albums-page.component';
import { PhotosPageComponent } from './photos-page/photos-page.component';
import { PageNotFoundComponent } from './shared/page-not-found.component';

export const routes: Routes = [
  {
    path: 'photo-album',
    component: AlbumsPageComponent
  },
  {
    path: 'photo-album-detail/:id',
    component: PhotosPageComponent,
  },
  {
    path: '',
    redirectTo: 'photo-album',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
