import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CommunityPageComponent} from "./community-page.component";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [CommunityPageComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CommunityPageModule { }
