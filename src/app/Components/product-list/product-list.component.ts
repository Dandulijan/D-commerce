import { Component, computed, inject, signal } from '@angular/core';
import { PRODUCTS, Product } from '../../Data/Product';
import { ProductService } from '../../services/product.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { ProductFormComponent } from '../../Forms/product-form/product-form.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    AsyncPipe,
    CurrencyPipe,
    ProductFormComponent,
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  // products = PRODUCTS;
  // products$ = computed(() => this.productService.products$);
  productService = inject(ProductService);
  products$ = this.productService.products$;
  selectedProduct = signal<Product | undefined>(undefined);

  cancelEdit() {
    this.selectedProduct.set(undefined);
  }
  DeleteProduct(item: Product): void {
    this.productService.deleteProduct(item.id);
    console.log(`This product is deleted: ${item.name}`);
  }

  handleFormSubmit(updated: Product) {
    this.productService.updateProduct(updated);
    this.selectedProduct.set(undefined); // Close the form after update
  }
  UpdateProduct(item: Product): void {
    this.productService.updateProduct(item);
    console.log(`This product is deleted: ${item.name}`);
  }
}
