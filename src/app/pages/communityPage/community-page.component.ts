import { Component, OnInit } from '@angular/core';
import { Reviews } from 'src/app/models/Reviews';
import { HttpClientService } from '../../service/httpsClientService';

@Component({
  selector: 'app-community-page',
  templateUrl: './community-page.component.html',
  styleUrls: ['./community-page.component.css'],
})
export class CommunityPageComponent implements OnInit {
  reviews = Reviews;

  constructor() {}
  //constructor(private httpClientService: HttpClientService) { }

  ngOnInit(): void {}

  // getReviews(){
  //   this.httpClientService.getReviews(data => {
  //     kjsvijbviv,
  //     (error =>{
  //       console.log(error);
  //     })
  // });
}
