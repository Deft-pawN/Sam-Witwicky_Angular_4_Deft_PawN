import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private router:Router){}
  toProductDetails(){
  //需要使用路由对象 ,拿到router对象
  this.router.navigate(['/product',2]);//接收一个数组类型的
};

  
}



