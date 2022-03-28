import { Component, OnInit } from '@angular/core';
import {Noticia} from "../../models/Noticia";
import {Router} from "@angular/router";
import { api } from 'src/environments/api';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  noticias: Noticia[] = [];

  constructor(private router: Router, private apiz:api) { }

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
      },

      {

        title: 'Fortnite',
        description: 'Fortnite es un juego online de disparos (lo que se conoce como un shooter) en tercera persona (es decir; que ves a tu personaje según se mueve). Tiene dos modos de juego: Salvar al mundo y Battle Royale. Salvar al mundo es un mundo abierto que puede jugarse solo o online con amigos y es cooperativo.',
        button: 'https://www.epicgames.com/fortnite/es-ES/home'
      },
      {

        title: 'Halo Infinite',
        description: 'Halo Infinite es un videojuego de disparos en primera persona de la franquicia de videojuegos de ciencia ficción creada por Bungie Studios y actualmente desarrollada por 343 Industries.',
        button: 'https://www.xbox.com/es-MX/games/halo-infinite'
      },
      {

        title: 'Forza Horizon 5',
        description: 'Forza Horizon 5 es un videojuego de carreras multijugador en linea desarrollado por Playground Games y publicado por Xbox Game Studios.',
        button: 'https://www.xbox.com/es-MX/games/forza-horizon-5'
      },
      {

        title: 'DOOM Eternal',
        description: 'Doom Eternal es un videojuego de acción y disparos en primera persona desarrollado por id Software y publicado por Bethesda Softworks.',
        button: 'https://bethesda.net/es/game/doom'
      }

    ];
  }



}
