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

        title: 'GTA 6 en desarrollo',
        description: '\'GTA 6\' está en desarrollo: Rockstar confirma la nueva entrega de una de las franquicias más exitosas de la historia de los videojuegos.',
        button: 'https://www.xataka.com.mx/videojuegos/gta-6-esta-desarrollo-rockstar-confirma-nueva-entrega-franquicias-exitosas-historia-videojuegos'
      },
      {

        title: 'Dead Space Remake',
        description: 'Dead Space Remake: todo lo que sabemos hasta ahora del terrorífico retorno al USG Ishimura.',
        button: 'https://www.vidaextra.com/juegos-nuevos/dead-space-remake-para-ps5-xbox-series-x-s-pc-fecha-lanzamiento-ultimas-noticias-rumores'
      },
      {

        title: 'Genshin Impact',
        description: 'Es un juego de acción ARPG de mundo abierto free-to-play con una mecánica de monetización de Gacha para conseguir elementos adicionales como personajes especiales y armas.',
        button: 'https://genshin.hoyoverse.com/es/home'
      },
      {

        title: 'Elden Ring',
        description: 'Álzate, Sinluz, y que la gracia te guíe para abrazar el poder del Círculo de Elden y encumbrarte como señor del Círculo en las Tierras Intermedias.',
        button: 'https://es.bandainamcoent.eu/elden-ring/elden-ring'
      }

    ];
  }

}
