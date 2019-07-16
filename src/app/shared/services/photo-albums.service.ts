import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoAlbumsService {
  URL = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) { }

  public getAlbums(): Observable<any[]> {
    return this.http.get<any[]>( this.URL + '/albums');
  }

  public getPhotos(): Observable<any[]> {
    return this.http.get<any[]>( this.URL + '/photos');
  }

  public getUsers(): Observable<any[]> {
    return this.http.get<any[]>( this.URL + '/users');
  }
}