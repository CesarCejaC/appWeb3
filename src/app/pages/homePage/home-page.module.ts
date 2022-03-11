import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomePageComponent} from "./home-page.component";
import {RouterModule} from "@angular/router";
import {routes} from "../../routes/routes";



@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,({useHash:true}))
  ]
})
export class HomePageModule { }
