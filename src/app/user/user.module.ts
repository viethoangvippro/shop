import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsersRoutingModule } from './user-routing.modules';
import { FormsModule } from '@angular/forms';


import { UserService } from './user.service';
import { NgxPermissionsModule } from 'ngx-permissions';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,

  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    NgxPermissionsModule.forRoot(),
  ],exports:[
    LoginComponent,
    RegisterComponent
  ],
  providers: [UserService, NgxPermissionsModule]
})
export class UserModule { }
