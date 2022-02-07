import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from 'src/app/Album';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }),
};

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  // TODO: Replace this mock server with actual server
  private apiUrl = 'http://localhost:5000/albums';

  constructor(private http:HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.apiUrl);
  }

  deleteAlbum(thisAlbum: Album): Observable<Album> {
    const url = `${this.apiUrl}/${thisAlbum.id}`;
    return this.http.delete<Album>(url);
  }

  updateAlbumHighlight(thisAlbum: Album): Observable<Album> {
    const url = `${this.apiUrl}/${thisAlbum.id}`;
    return this.http.put<Album>(url, thisAlbum, httpOptions);
  }

  addAlbum(thisAlbum: Album):Observable<Album> {
    return this.http.post<Album>(this.apiUrl, thisAlbum, httpOptions);
  }
}
