import { Component, OnInit } from '@angular/core';
import { HttpClientService } from "../../service/httpsClientService";
import {Reviews} from "../../models/Reviews";

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.css']
})
export class ReviewPageComponent implements OnInit {
  reviews: any;

  titulo="Puntuar"

  constructor(private http:HttpClientService) { }

  ngOnInit(): void {
  }



}
