import { Component, OnInit } from '@angular/core';
import { Photo } from '../shared/models/photos';
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
  isDeleted = false;
  url;
  showImage = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private photoAlbumService: PhotoAlbumsService,
              private spinnerService: SpinnerService) { }

  ngOnInit() {
    this.spinnerService.start();
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
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

  deleteImage(photo: Photo) {
    this.isDeleted = true;
  }

  showBigImage(photo) {
    this.url = photo.url;
    this.showImage = true;
  }

  closeBigImage() {
    this.showImage = false;
  }

  btnClick() {
    this.router.navigateByUrl('/photo-album');
  }
}
