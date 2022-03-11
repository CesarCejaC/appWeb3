import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomePageModule} from "./homePage/home-page.module";
import {CommunityPageModule} from "./communityPage/community-page.module";
import {ReviewPageModule} from "./reviewPage/review-page.module";
import {LoginPageModule} from "../routes/login/login-page.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomePageModule,
    CommunityPageModule,
    ReviewPageModule,
    LoginPageModule
  ]
})
export class PagesModule { }
