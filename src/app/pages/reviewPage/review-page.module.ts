import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReviewPageComponent} from "./review-page.component";
import {RouterModule} from "@angular/router";
import {MatFormFieldModule} from "@angular/material/form-field";
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ReviewPageComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    RouterModule,
    
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ReviewPageModule { }
