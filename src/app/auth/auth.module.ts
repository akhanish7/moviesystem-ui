import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import {RouterModule} from "@angular/router";
import {AuthService} from "./auth.service";


@NgModule({
  declarations: [
    AuthComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
        path : '',
        component : AuthComponent
      }]
    )
  ],
  providers : [AuthService]
})
export class AuthModule { }
