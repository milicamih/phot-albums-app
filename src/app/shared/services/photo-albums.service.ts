import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from '../models/album';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoAlbumsService {
  URL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  public getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>( this.URL + '/albums');
  }

  public getPhotos(id: string): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.URL}/photos?albumId=${id}`);
  }

  public getUsers(): Observable<any[]> {
    return this.http.get<any[]>( this.URL + '/users');
  }
}
