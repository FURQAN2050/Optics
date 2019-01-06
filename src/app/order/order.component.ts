import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  balance:any;
  advcance:any;
  total:any;
  constructor() {
   }

  ngOnInit() {
    this.balance=this.total-this.advcance;
  }

}
