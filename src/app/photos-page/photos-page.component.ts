import { Component, OnInit } from '@angular/core';
import { Photos } from '../shared/models/photos';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoAlbumsService } from '../shared/services/photo-albums.service';


@Component({
  selector: 'app-photos-page',
  templateUrl: './photos-page.component.html',
  styleUrls: ['./photos-page.component.scss']
})
export class PhotosPageComponent implements OnInit {
  photos: Photos [] = [];
  term: string;
  isDeleted= false;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private photoAlbumService: PhotoAlbumsService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.photoAlbumService.getPhotos(id).subscribe(
      data => {
        this.photos = data;
        console.log(this.photos);
      }, error => {
        console.log(error);
      });
  }

  
  deleteImage(photo: Photos){
    photo.isDeleted = true;
  }

  btnClick() {
    this.router.navigateByUrl('/photo-album');
  }
}
