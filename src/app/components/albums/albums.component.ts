import { Component, OnInit } from '@angular/core';
import { AlbumService } from 'src/app/services/album.service';
import { Album } from 'src/app/Album';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums: Album[] = [];
  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe((albums) => this.albums = albums);
  }

  deleteAlbum(thisAlbum: Album) {
    this.albumService
      .deleteAlbum(thisAlbum)
      .subscribe(
        () => this.albums = this.albums.filter(x => x.id !== thisAlbum.id)
      );
  }

  toggleHighlight(thisAlbum: Album) {
    thisAlbum.highlight = !thisAlbum.highlight;
    this.albumService.updateAlbumHighlight(thisAlbum).subscribe();
  }

  addAlbum(thisAlbum: Album) {
    this.albumService.addAlbum(thisAlbum).subscribe((thisAlbum) => (this.albums.push(thisAlbum)));
  }

}
