import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit {

  mockTrackList = [
    {
      name: 'Traicionera',
      autor: 'Pastor López'
    },    {
      name: 'Lucerito',
      autor: 'Gustavo Quintero'
    },    {
      name: 'Adonay',
      autor: 'Rodolfo Aicardi'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
