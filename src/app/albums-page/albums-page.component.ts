import { Component, OnInit } from '@angular/core';
import { PhotoAlbumsService } from '../shared/services/photo-albums.service';
import { Albums } from '../shared/models/albums';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-albums-page',
  templateUrl: './albums-page.component.html',
  styleUrls: ['./albums-page.component.scss']
})
export class AlbumsPageComponent implements OnInit {
  albums: Albums[] = [];
  term: string;

  constructor(private photoAlbumsService: PhotoAlbumsService) { }

  ngOnInit() {
    forkJoin([
      this. photoAlbumsService.getAlbums(),
      this. photoAlbumsService.getUsers()
    ]).subscribe(([albums, users]) => {
      this.albums = albums;
      this.addUserToAlbum(users);
      console.log(albums);
    }, (error) => {
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

  deleteAlbum(album: Albums) {
    album.isDeleted = true;
  }
}
