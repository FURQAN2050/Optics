import { Injectable } from '@angular/core';
import {Http,Response, Headers, RequestOptions } from '@angular/http';   
import { Observable } from 'rxjs/Observable';  
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/do'; 
@Injectable()
export class OrderService {

  constructor(private http:Http,) { }
  public delete(id){   
    //console.log('in delete pant method');
    let myParams = new URLSearchParams();
    myParams.append('_id', id);
    let options = new RequestOptions({ params: myParams }); 
    return this.http.delete('http://localhost:3000/api/order/'+id)  
            .map((response: Response) =>response.json())               
  } 


  getAll() : Observable<any>{  
    //console.log('enter in get all products detail');
return this.http.get('http://localhost:3000/api/order')  
.map((res: Response) => res.json())  
}

getOne(id){     
  let myParams = new URLSearchParams();
  myParams.append('_id', id);
  let options = new RequestOptions({ params: myParams }); 
  return this.http.get('http://localhost:3000/api/order/'+id)  
  .map((res: Response) => res.json())  
} 
update(form){
  this.http.put('http://localhost:3000/api/order', form)
  .map(files =>files.json())

} 
post(form){

  this.http.post('http://localhost:3000/api/order', form)
  .map(files =>files.json())
} 

}
