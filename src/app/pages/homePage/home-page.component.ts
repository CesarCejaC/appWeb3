import { Component, OnInit } from '@angular/core';
import {Noticia} from "../../models/Noticia";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  noticias: Noticia[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {

    this.router.navigate(['/history'])

    this.noticias = [
      {
        img: '',
        title: 'GTA 6 en desarrollo',
        description: 'Sample text. Click to select the text box. Click again or double click to start editing the text.'
      },
      {
        img: '',
        title: 'Dead Space Remake',
        description: 'Sample text. Click to select the text box. Click again or double click to start editing the text.'
      },
      {
        img: '',
        title: 'Genshin Impact',
        description: 'Sample text. Click to select the text box. Click again or double click to start editing the text.'
      },
      {
        img: '',
        title: 'Elden Ring',
        description: 'Sample text. Click to select the text box. Click again or double click to start editing the text.'
      }

    ];
  }

}
