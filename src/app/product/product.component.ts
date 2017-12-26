import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private productid:number;//接收传递进来的参数
  constructor(private routerInfo:ActivatedRoute) { }

  ngOnInit() {
    //params 是一种类型 =>表示前者给后者赋值
    //this.routerInfo.params.subscribe((params:Params)=>this.productid =params['id']);
    this.productid = this.routerInfo.snapshot.params['id'];
  }

}
