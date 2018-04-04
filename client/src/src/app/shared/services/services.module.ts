import { NgModule } from '@angular/core';
import {AuthService} from "./auth/auth.service";
import {UserService} from "./user/user.service";
import {SidenavService} from "./layout/sidenav.service";

@NgModule({
  providers: [
    AuthService,
    UserService,
    SidenavService
  ]
})
export class ServicesModule { }