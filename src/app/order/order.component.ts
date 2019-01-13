import { Component, OnInit } from '@angular/core';
import {OrderService} from '../services/order.service';
declare var $: any;

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
Orders=[];
total='';
advance='';
balance='';
name='';
contact='';
deliveryDate='';
orderDate :any =new Date().getDate()+'/'+new Date().getMonth()+1+'/'+new Date().getFullYear();
description='';


  constructor(
    public Order:OrderService
  ) { }

  ngOnInit() {
  this.getAllOrders();

  }

  getAllOrders(){
    this.Order.getAll().subscribe(data=>{
      this.Orders=data;
      console.log('all orders',data);
    })
  }
  buyNow(data){
    console.log(data.value);
         this.Order.postOrder(data.value).subscribe(data=>{
           console.log(data);
           this.showNotification('bottom','left',"Customer added sucessfully!");
           this.resetform();
           this.getAllOrders();
         },(err) => {
          console.log(err)
          this.showNotification('bottom','right',"error occured");
        })
  }

  
deleteEntry(form){
  console.log('enter on func',form._id);
  this.Order.deleteOrder(form._id).subscribe(data=>{
    this.showNotification('bottom','right',"Record is deleted successfully");
    this.getAllOrders();
  },(err) => {
    console.log(err)
    this.showNotification('bottom','right',"Record is Not deleted successfully");
  
  })

}

resetform(){
  this.total='';
  this.advance='';
  this.advance='';
  this.balance='';
  this.name='';
  this.contact='';
  this.deliveryDate='';
  this.orderDate=new Date().getDate()+'/'+new Date().getMonth()+1+'/'+new Date().getFullYear(); 
   this.description='';
}


showNotification(from, align,message){
  const type = ['','info','success','warning','danger'];

  const color = Math.floor((Math.random() * 4) + 1);

  $.notify({
      icon: "notifications",
      message: message

  },{
      type: type[color],
      timer: 4000,
      placement: {
          from: from,
          align: align
      },
      template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
        '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
        '<i class="material-icons" data-notify="icon">notifications</i> ' +
        '<span data-notify="title">{1}</span> ' +
        '<span data-notify="message">{2}</span>' +
        '<div class="progress" data-notify="progressbar">' +
          '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
        '</div>' +
        '<a href="{3}" target="{4}" data-notify="url"></a>' +
      '</div>'
  });
}

}
