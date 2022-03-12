import { HomePageComponent } from '../pages/homePage/home-page.component';
import { LayoutComponent } from '../layout/layout.component';
import {LoginPageComponent} from "./login/login-page.component";
import {CommunityPageComponent} from "../pages/communityPage/community-page.component";
import {ReviewPageComponent} from "../pages/reviewPage/review-page.component";
export const routes = [
  {path:'', component: LoginPageComponent},
  {
    path: 'history',
    component: LayoutComponent,
    children:[
      {path:'', component: HomePageComponent},
      {path:'communityPage', component: CommunityPageComponent},
      {path:'reviewPage', component: ReviewPageComponent},
      {path:'history', component: HomePageComponent},
    ]
  },
  //not lazy load components
  {path: 'history/loginPage', component: LoginPageComponent},
  {path: 'history/loginPage/history', component: HomePageComponent},

];
