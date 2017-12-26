import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-seller-info',
  templateUrl: './seller-info.component.html',
  styleUrls: ['./seller-info.component.css']
})
export class SellerInfoComponent implements OnInit {
  private sellerID:number;
  constructor(private routeInfo:ActivatedRoute) { }
//引入当前激活的路由信息
  ngOnInit() {
    this.sellerID = this.routeInfo.snapshot.params['id'];
  }

}
