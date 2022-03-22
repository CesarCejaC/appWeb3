import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/models/Noticia';
import { Reviews } from 'src/app/models/Reviews';
import { HttpClientService } from '../../service/httpsClientService';

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.css']
})
export class ReviewPageComponent implements OnInit {

 // reviews= Reviews

    titulo="Puntuar"

  constructor() { }
  // constructor(private httpClientService: HttpClientService) { }

  ngOnInit(): void {
  }

  // getReviews(){
  //   this.httpClientService.getReviews(data => {
  //     kjsvijbviv,
  //     (error =>{
  //       console.log(error);
  //     })
  // });

}
