import { computed, Injectable, signal } from '@angular/core';
import { Product, PRODUCTS } from '../Data/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products = PRODUCTS;
  products$ = signal<Product[]>(PRODUCTS);
  selectedProduct = signal<Product | undefined>(undefined);
  getProducts(): Product[] {
    return this.products$();
  }

  getProductById(id: number): Product | undefined {
    return this.products$().find((product) => product.id === id);
  }

  addProduct(product: Product): void {
    this.products$().push(product);
  }
  deleteProduct(id: number) {
    this.products$.update((products) => {
      const updatedProducts = products.filter((product) => product.id !== id);
      return updatedProducts;
    });
  }

  updateProduct(updated: Product) {
    console.log('Updated service product:', updated);
    // const index = this.products$().findIndex((p) => p.id === updated.id);

    // if (index !== -1) {
    //   const newList = [...this.products$()];
    //   newList[index] = updated;
    //   this.products$.set(newList);
    // }
    // return this.products$.update((products) => {
    //   const updatedProducts = products.map((product) =>
    //     product.id === updated.id ? updated : product
    //   );
    //   return updatedProducts;
    // }
    // this.products$.update((products) => {
    //   const index = products.findIndex((p) => p.id === updated.id);
    //   if (index !== -1) {
    //     const newList = [...products];
    //     newList[index] = updated;
    //     return newList;
    //   }
    //   return products; // return original if not found
    // });
    this.products$.update((products) => {
      return products.map((item) => {
        if (item.id !== updated.id) return item;

        const isOutOfStock = updated.stock === 0;
        const wasOutOfStock = updated.status === 'out-of-stock';

        if (isOutOfStock) {
          return { ...updated, status: 'out-of-stock' };
        }

        if (wasOutOfStock) {
          return { ...updated, stock: 0 };
        }

        return updated;
      });
    });
  }
}
