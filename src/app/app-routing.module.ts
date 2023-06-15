import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOrdersComponent } from './orders/list-orders/list-orders.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  {path: 'orders', component:ListOrdersComponent},
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
