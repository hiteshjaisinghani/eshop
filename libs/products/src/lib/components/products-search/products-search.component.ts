

/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, EventEmitter, OnInit,Output } from '@angular/core';

@Component({
  selector: 'products-search',
  templateUrl: './products-search.component.html',
  styles: [
  ]
})
export class ProductsSearchComponent implements OnInit {
  [x: string]: any;
  searchword:string;
 @Output() event = new EventEmitter<string>()

  constructor() {

  }
sendMessage(){
  this.event.emit(this.searchword)
}


  ngOnInit(): void {

  }




  // Search(){
  //   if(this.name==""){
  //     this.ngOnInit();
  //   }else{
  //     this.search=this.Product.filter((res: { name: string; })=>{
  //       return res.name.toLocaleLowerCase().match(this.search.toLocateLowerCase());
  //     })
  //   }
  // }
}
