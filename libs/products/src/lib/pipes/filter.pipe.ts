
import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

//   transform(ninjas: any, term: any): any {
//     if (term === undefined || term=="") return ninjas;
//     return ninjas.filter(function (ninja) {
//       return ninja.ninname.toLowerCase().includes(term.toLowerCase());
//     })
//   }
// }
transform(Product: any, term: any): any{
  if (term === undefined || term==="" ) return Product;
  return Product.filter(function (Product) {
    return Product.name.toLowerCase().includes(term.toLowerCase());
  })}}
