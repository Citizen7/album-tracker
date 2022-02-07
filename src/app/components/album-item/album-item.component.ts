import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Album } from 'src/app/Album';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-album-item',
  templateUrl: './album-item.component.html',
  styleUrls: ['./album-item.component.css']
})
export class AlbumItemComponent implements OnInit {
  @Input() thisAlbum!: Album;
  @Output() onDeleteAlbum: EventEmitter<Album> = new EventEmitter();
  @Output() onToggleHighlight: EventEmitter<Album> = new EventEmitter();

  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
    
  }

  onDelete(thisAlbum: Album) {
    this.onDeleteAlbum.emit(thisAlbum);
  }

  onToggle(thisAlbum: Album) {
    this.onToggleHighlight.emit(thisAlbum);
  }

}
