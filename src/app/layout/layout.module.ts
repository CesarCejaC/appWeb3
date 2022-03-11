import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutComponent} from "./layout.component";
import {RouterModule} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";



@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatListModule
  ]
})
export class LayoutModule { }
