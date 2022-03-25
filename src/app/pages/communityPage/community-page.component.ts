import { Component, OnInit } from '@angular/core';
import { Reviews } from 'src/app/models/Reviews';
import { HttpClientService } from '../../service/httpsClientService';
import { Observable } from "rxjs";

import { service } from '../../service/service'

@Component({
  selector: 'app-community-page',
  templateUrl: './community-page.component.html',
  styleUrls: ['./community-page.component.css'],
})
export class CommunityPageComponent implements OnInit {
  //reviews= Reviews;
  reviews: any;

  //constructor(private httpClientService: HttpClientService) { }
  constructor(private http: service) {
  }

  ngOnInit(): void {
    this.reviews = this.http.getReviews();
  }


   //getReviews():void{
     //this.httpClientService.getReviews().subscribe(response=>{
        //this.httpClientService.push(...this.httpClientService)
      // }

     //,error => {
      // console.log(error)
     //});
  //}
}
