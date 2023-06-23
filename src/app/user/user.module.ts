import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsersRoutingModule } from './user-routing.modules';
import { FormsModule } from '@angular/forms';

import { NgxPermissionsModule } from 'ngx-permissions';
import { AdminComponent } from './admin/admin.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { StaffComponent } from './staff/staff.component';
import { UserService } from './user.service';
import { SiteFrameworkModule } from "../site-framework/site-framework.module";
import { HomeComponent } from '../home/home.component';


@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent,
        AdminComponent,
        UserloginComponent,
        StaffComponent,HomeComponent
    ],
    exports: [
        LoginComponent,
        RegisterComponent,
    ], providers: [UserService, NgxPermissionsModule],
    imports: [
        CommonModule,
        UsersRoutingModule,
        FormsModule,
        NgxPermissionsModule.forRoot(),
        SiteFrameworkModule
    ]
})
export class UserModule { }
