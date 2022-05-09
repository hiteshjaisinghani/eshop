

/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit,Output } from '@angular/core';

@Component({
  selector: 'products-search',
  templateUrl: './products-search.component.html',
  styles: [
  ]
})
export class ProductsSearchComponent implements OnInit {
  [x: string]: any;
 @Output() searchword: string;

  constructor() { }

  ngOnInit(): void {
  }




  // Search(){
  //   if(this.name==""){
  //     this.ngOnInit();
  //   }else{
  //     this.search=this.Product.filter(res=>{
  //       return res.name.toLocaleLowerCase().match(this.search.toLocateLowerCase());
  //     })
  //   }
  // }
}
