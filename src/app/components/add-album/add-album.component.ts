import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Album } from 'src/app/Album';

@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.css']
})
export class AddAlbumComponent implements OnInit {
  @Output() onAddAlbum: EventEmitter<Album> = new EventEmitter();

  artistName?: string;
  albumTitle?: string;
  releaseDate?: string;
  showAddAlbum: boolean = false;
  subscription: Subscription = new Subscription();

  constructor(private uiService: UiService) { 
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddAlbum = value);
  }

  ngOnInit(): void {
  }

  onSubmit() {
    // Basic Validation
    if (!this.artistName) {
      alert('You must add an artist.');
      return;
    }
    if (!this.albumTitle) {
      alert('The album must be titled.');
      return;
    }
    if (!this.releaseDate) {
      this.releaseDate = "1900-01-01";
    }

    const newAlbum = {
      album: this.artistName,
      artist: this.albumTitle,
      date: this.releaseDate,
      highlight: false,
      album_art: null
    }

    this.onAddAlbum.emit(newAlbum);

    // clear form
    this.albumTitle = '';
    this.artistName = '';
    this.releaseDate = '';
  }

}
