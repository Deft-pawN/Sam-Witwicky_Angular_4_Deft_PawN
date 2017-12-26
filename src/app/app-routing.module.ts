import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component'; 
import { Code404Component } from './code404/code404.component'; 
import { ProductDescComponent } from './product-desc/product-desc.component'; 
import { SellerInfoComponent } from './seller-info/seller-info.component';
import { ChatComponent } from './chat/chat.component'; 
const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'product/:id',component:ProductComponent,children:[
    
  {path:'product-desc',component:ProductDescComponent},
  {path:'seller/:id',component:SellerInfoComponent},
  
    ]},
  {path:'chat',component:ChatComponent,outlet:'aux'},
  {path:'**',component:Code404Component},
  //注意通配符的路由需要放在最后一个，否则就会首先匹配
  //path 不能用/开头
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
