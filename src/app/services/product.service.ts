import { Injectable } from '@angular/core';
import { Product, PRODUCTS } from '../Data/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // private products: Product[] = [];
  // private products = PRODUCTS;
  private products = PRODUCTS;

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find((product) => product.id === id);
  }
}
