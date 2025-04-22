import { Component, computed, inject, signal } from '@angular/core';
import { PRODUCTS, Product } from '../../Data/Product';
import { ProductService } from '../../services/product.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { ProductFormComponent } from '../../Forms/product-form/product-form.component';
import Swal from 'sweetalert2';
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
  editMode = false;
  setSelectedProduct(product: Product) {
    this.selectedProduct.set(product);
    this.handleFormSubmit(product);
    this.editMode = true;
  }
  cancelEdit() {
    console.log('Edit cancelled');
    this.editMode = false;
    this.selectedProduct.set(undefined);
  }
  DeleteProduct(item: Product): void {
    this.productService.deleteProduct(item.id);
    console.log(`This product is deleted: ${item.name}`);
  }

  handleFormSubmit(updated: Product) {
    console.log('Form submitted with data:', updated);
    this.productService.updateProduct(updated);
    this.cancelEdit;
  }
  // Applied SweetAlert2 for edit
  // editProductPopup(product: Product) {
  //   Swal.fire({
  //     title: 'Edit Product',
  //     html: `
  //       <div class="space-y-4 text-left">
  //         <div>
  //           <label class="block text-sm font-medium mb-1">Name</label>
  //           <input id="swal-name" type="text" class="w-full border rounded-lg px-3 py-2" value="${product.name}" />
  //         </div>
  //         <div>
  //           <label class="block text-sm font-medium mb-1">Price</label>
  //           <input id="swal-price" type="number" class="w-full border rounded-lg px-3 py-2" value="${product.price}" />
  //         </div>
  //         <div>
  //           <label class="block text-sm font-medium mb-1">Category</label>
  //           <input id="swal-category" type="text" class="w-full border rounded-lg px-3 py-2" value="${product.category}" />
  //         </div>
  //       </div>
  //     `,
  //     showCancelButton: true,
  //     confirmButtonText: 'Update',
  //     preConfirm: () => {
  //       return {
  //         ...product, // keep existing product props like id
  //         name: (document.getElementById('swal-name') as HTMLInputElement)
  //           .value,
  //         price: +(document.getElementById('swal-price') as HTMLInputElement)
  //           .value,
  //         category: (
  //           document.getElementById('swal-category') as HTMLInputElement
  //         ).value,
  //       };
  //     },
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       console.log('Updated product:', result.value);

  //       this.productService.updateProduct(result.value);
  //     }
  //   });
  // }
}
