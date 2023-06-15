import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  constructor(private userService: UserService){}
  ngOnInit(): void {
  }

  onLogout(): void {
    // Đăng xuất và chuyển hướng về trang đăng nhập
    this.userService.logout();
    window.location.href = '/';
  }
}
