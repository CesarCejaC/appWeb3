import { Component, OnInit } from '@angular/core';
import { Reviews } from 'src/app/models/Reviews';
import { api } from 'src/environments/api';

@Component({
  selector: 'app-community-page',
  templateUrl: './community-page.component.html',
  styleUrls: ['./community-page.component.css']
})
export class CommunityPageComponent implements OnInit {

  reviews: Reviews[] = [];

  constructor() { }

  ngOnInit(): void {

    this.reviews = [
      
    ]
  }

}
