import { Injectable, signal } from '@angular/core';
import { Product, PRODUCTS } from '../Data/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products = PRODUCTS;
  products$ = signal<Product[]>(PRODUCTS);
  selectedProduct = signal<Product | undefined>(undefined);
  // selectedProductSignal = signal<Product>(null);

  // Method to set the selected product
  // setSelectedProduct(product: Product) {
  //   this.selectedProductSignal.set(product);
  // }

  getProducts(): Product[] {
    return this.products$();
  }

  getProductById(id: number): Product | undefined {
    return this.products.find((product) => product.id === id);
  }

  addProduct(product: Product): void {
    this.products.push(product);
  }
  deleteProduct(id: number) {
    this.products$.update((products) => {
      const updatedProducts = products.filter((product) => product.id !== id);
      return updatedProducts;
    });
    //this.products = this.products.filter((product) => product.id !== id);
  }
  // updateProduct(updatedProduct: Product): void {}

  updateProduct(updated: Product) {
    const index = this.products$().findIndex((p) => p.id === updated.id);
    if (index !== -1) {
      const newList = [...this.products$()];
      newList[index] = updated;
      this.products$.set(newList);
    }
  }
}
