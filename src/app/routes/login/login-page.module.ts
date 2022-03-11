import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {LoginPageComponent} from "./login-page.component";



@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LoginPageModule { }
