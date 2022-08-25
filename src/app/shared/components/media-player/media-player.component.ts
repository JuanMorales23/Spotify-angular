import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {
  mockCover: any = {
    cover: 'https://cdns-images.dzcdn.net/images/cover/8dfd5492a9be7643241a51702da5d042/264x264.jpg',
    name: 'La Tusa',
    album: 'Pastor López Exitos'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
