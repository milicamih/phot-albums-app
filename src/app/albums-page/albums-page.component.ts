import { Component, OnInit } from '@angular/core';
import { PhotoAlbumsService } from '../shared/services/photo-albums.service';
import { Album } from '../shared/models/album';
import { forkJoin } from 'rxjs';
import { SpinnerService } from '../shared/services/spinner.service';

@Component({
  selector: 'app-albums-page',
  templateUrl: './albums-page.component.html',
  styleUrls: ['./albums-page.component.scss']
})
export class AlbumsPageComponent implements OnInit {
  albums: Album[] = [];
  term: string; //for filtering albums by title

  constructor(private photoAlbumsService: PhotoAlbumsService,
              private spinnerService: SpinnerService) { }

  ngOnInit() {
    this.spinnerService.start();
    forkJoin([
      this. photoAlbumsService.getAlbums(),
      this. photoAlbumsService.getUsers()
    ]).subscribe(([albums, users]) => {
      this.albums = albums;
      this.addUserToAlbum(users);
      this.spinnerService.stop();
    }, (error) => {
      this.spinnerService.stop();
      console.log(error);
    });
  }

  addUserToAlbum(users: any) {
    this.albums.forEach(album => {
       const findUser = users.find(user => user.id === album.userId);
       if (findUser) {
        album.creatorName = findUser.name;
      }
    });
  }

}
