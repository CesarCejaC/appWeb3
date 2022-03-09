import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/homePage/home-page.component';
import { CommunityPageComponent } from './pages/communityPage/community-page.component';
import { ReviewPageComponent } from './pages/reviewPage/review-page.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginPageComponent } from './routes/login/login-page.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CommunityPageComponent,
    ReviewPageComponent,
    LayoutComponent,
    LoginPageComponent,

  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
