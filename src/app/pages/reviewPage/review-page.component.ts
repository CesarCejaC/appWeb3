import { Component, OnInit } from '@angular/core';
import { HttpClientService } from "../../service/httpsClientService";
import {Reviews} from "../../models/Reviews";
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.css']
})
export class ReviewPageComponent implements OnInit {
  reviews: any;

  titulo="Puntuar"

  constructor(private http:HttpClientService, public jijija: FormBuilder) { }

  ngOnInit(): void {
    this.reviews = this.jijija.group({
      nombre_usuario:[''],
      nombre_juego:[''],
      calificacion:[''],
      descripcion:[''],
    }) 
  }

  send(){
    this.http.saveReview(this.reviews?.value).subscribe(
      res=>{
        this.reviews.push(res);
      }
    )
    window.location.reload();
  }
}
