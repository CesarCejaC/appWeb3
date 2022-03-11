import { NgModule } from '@angular/core';
import { RouterModule} from "@angular/router";
import {LoginPageModule} from "./login/login-page.module";
import {routes} from "./routes";


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  }),
    LoginPageModule
  ],
  declarations: [],
  exports: [RouterModule],
  entryComponents: []
})
export class RoutesModule {
  constructor() {
  }
}
