import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReviewPageComponent} from "./review-page.component";
import {RouterModule} from "@angular/router";
import {MatFormFieldModule} from "@angular/material/form-field";



@NgModule({
  declarations: [ReviewPageComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    RouterModule
  ]
})
export class ReviewPageModule { }
