import { Component, OnInit } from '@angular/core';
import { PhotoAlbumsService } from '../shared/services/photo-albums.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-albums-page',
  templateUrl: './albums-page.component.html',
  styleUrls: ['./albums-page.component.scss']
})
export class AlbumsPageComponent implements OnInit {
  albums = [];
 
  constructor(private photoAlbumsService: PhotoAlbumsService,) { }

  ngOnInit() {
    forkJoin([
      this. photoAlbumsService.getAlbums(),
      this. photoAlbumsService.getUsers()
    ]).subscribe(([albums, users])=> {
      this.albums = albums;
      this.addUserToAlbum(users);
      console.log(this.albums);
    }, (error) => {
      console.log(error);
    })

    this.photoAlbumsService.getPhotos().subscribe(data =>{
      console.log(data);
    })
  }

  addUserToAlbum(users: any) {
    this.albums.forEach(album=> {
       let findUser = users.find(user => user.id === album.userId);  
       if(findUser) {
        album.name = findUser.name;
      }
    })
  }
}
