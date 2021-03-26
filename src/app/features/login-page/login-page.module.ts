import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPageRoutingModule } from './login-page-routing.module';
import { LoginPageComponent } from './login-page.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
	  LoginPageComponent
  ],
  imports: [
    CommonModule,
    LoginPageRoutingModule,
	SharedModule
  ]
})
export class LoginPageModule { }
