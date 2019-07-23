import { Component, OnInit } from '@angular/core';
import { Photo } from '../shared/models/photo';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoAlbumsService } from '../shared/services/photo-albums.service';
import { SpinnerService } from '../shared/services/spinner.service';


@Component({
  selector: 'app-photos-page',
  templateUrl: './photos-page.component.html',
  styleUrls: ['./photos-page.component.scss']
})
export class PhotosPageComponent implements OnInit {
  photos: Photo [] = [];
  term: string;
  url: string;
  showImage = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private photoAlbumService: PhotoAlbumsService,
              private spinnerService: SpinnerService) { }

  ngOnInit() {
    this.spinnerService.start();
    const id = this.route.snapshot.paramMap.get('id');
    this.photoAlbumService.getPhotos(id).subscribe(
      data => {
        this.photos = data;
        this.spinnerService.stop();
        console.log(this.photos);
      }, error => {
        this.spinnerService.stop();
        console.log(error);
      });
  }
  //DELETE FULL SIZE IMAGE
  deleteImage(photo: Photo) {
    photo.isDeleted = true;
  }
  //SHOW FULL SIZE IMAGE
  showBigImage(photo: Photo) {
    if(!photo.isDeleted) {
      this.spinnerService.start();
      this.url = photo.url;
      this.showImage = true;
      this.spinnerService.stop();
    }
  }
  //HIDE FULL SIZE IMAGE
  closeBigImage() {
    this.showImage = false;
  }
  //BACK TO ALBUMS PAGE
  btnClick() {
    this.router.navigateByUrl('/photo-album');
  }
}
