import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {
  transform(products: Product[], searchText: string): Product[] {
    if (!products || !searchText) {
      return products;
    }

    return products.filter(product =>
      product.productName.toLowerCase().includes(searchText.toLowerCase())
    );
  }
}
