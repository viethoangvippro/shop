import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent  implements OnInit{
  username: string |any;
  password: string |any;

  constructor(private authService: UserService, private router: Router) {}
  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.authService.login(this.username, this.password)) {
      // Nếu đăng nhập thành công, chuyển hướng đến trang tương ứng với vai trò của người dùng
      if (this.authService.isAdmin()) {
        this.router.navigate(['/admin']);
           } else if (this.authService.isEmployee()) {
        this.router.navigate(['/staff']);
      } else {
        this.router.navigate(['/userlogin']);
      }
    } else {
      // Nếu đăng nhập thất bại, hiển thị thông báo lỗi
      alert('Invalid username or password');
    }
  }

  // ngOnInit(){

  // }
  //   async login() {
  //     // const url = 'http://localhost:3000/user';
  //     // this.role = this.userService.get<User>(url);
  //   // Perform authentication and retrieve permissions
  //   const permissions = ['ADMIN']; // Example permissions
  //   this.userService.setPermissions(permissions);

  //   // let a = this.userService.login1(this.username,this.password,this.role);
  //   // Navigate to appropriate page based on permissions
  //   if (await this.userService.hasPermission('ADMIN')) {
  //     this.router.navigateByUrl('/admin');
  //   } else {
  //     this.router.navigateByUrl('/userlogin');
  //   }
  // }

  // onSubmit() {
  //   this.userService.login(this.username, this.password).subscribe(
  //     (response) => {
  //       console.log('Login successful:', response);
  //       // Lưu thông tin đăng nhập vào localStorage hoặc sessionStorage
  //     },
  //     (error) => {
  //       console.log('Login failed:', error);
  //       // Hiển thị thông báo lỗi đăng nhập
  //     }
  //   );
  // }
}
