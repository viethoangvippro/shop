import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {

  private apiURL = 'http://localhost:3000';
  constructor(private http: HttpClient,private permissionsService: NgxPermissionsService) {}

  async login(username: string, password: string): Promise<Observable<any>> {
    const url = 'http://localhost:3000/user'; // URL đến mock API
    const body = { username, password }; // Body của request
    return await this.http.post(url,body);// Gửi request và trả về response dưới dạng Observable

  }
  async login1(username: string, password: string, role : string): Promise<Observable<any>> {
    const url = 'http://localhost:3000/user'; // URL đến mock API
    const body = { username, password , role}; // Body của request
    return await this.http.post(url,body);// Gửi request và trả về response dưới dạng Observable

  }
  public setPermissions(permissions: string[]) {
    this.permissionsService.loadPermissions(permissions);
  }

  public async hasPermission(permission: string): Promise<boolean> {
    return await this.permissionsService.hasPermission(permission);
  }

  register(username: string, password: string,confirmpassword: string,email: string,phone: string,address: string,gender: string): Observable<any> {
    const url = 'http://localhost:3000/user'; // URL đến mock API
    const body = { username, password,email,confirmpassword,phone,address,gender}; // Body của request

    return this.http.post(url, body); // Gửi request và trả về response dưới dạng Observable
  }
}


