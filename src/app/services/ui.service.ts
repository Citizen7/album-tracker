import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddAlbum: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddAlbum(): void {
    this.showAddAlbum = !this.showAddAlbum;
    this.subject.next(this.showAddAlbum);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
