//   productForm = this.fb.group({
//     name: ['', Validators.required],
//     description: ['', Validators.required],
//     price: [0, [Validators.required, Validators.min(0)]],
//     category: ['', Validators.required],
//     stock: [0, [Validators.required, Validators.min(0)]],
//     status: ['available', Validators.required],
//     rating: [0, [Validators.required, Validators.min(0), Validators.max(5)]],
//     imageUrl: ['', Validators.required],
//     tags: [[]], // default to empty array
//   });

//   // ngOnInit() {
//   //   if (this.product) {
//   //     this.productForm.patchValue(this.product);
//   //   }
//   // }

// submitForm() {
//   if (this.productForm.valid) {
//     const updatedProduct: Product = {
//       ...this.productForm.value,
//       id: this.product?.id ?? Date.now(), // use existing ID or create a new one
//       createdAt: this.product?.createdAt ?? new Date().toISOString(),
//       updatedAt: new Date().toISOString(),
//     };
//     Swal.fire({
//       position: 'center',
//       icon: 'success',
//       title: ` ${this.product?.name} is updated successfully}`,
//       showConfirmButton: false,
//       timer: 2700,
//     });
//     this.updateProduct.emit(updatedProduct); // emit the updated product
//   }
// }

import {
  Component,
  effect,
  EventEmitter,
  inject,
  Input,
  Output,
  signal,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Product } from '../../Data/Product';
// import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
})
export class ProductFormComponent {
  @Input() product = signal<Product | undefined>(undefined);
  @Output() updateProduct = new EventEmitter<Product>();
  productForm!: FormGroup;
  //   fb = inject(FormBuilder);
  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      category: [null, Validators.required],
      stock: [0, [Validators.required, Validators.min(0)]],
      status: ['available', Validators.required],
      rating: [0, [Validators.required, Validators.min(0), Validators.max(5)]],
      imageUrl: ['', Validators.required],
    });

    effect(() => {
      const value = this.product();
      if (value) {
        this.productForm.patchValue(value);
      } else {
        this.productForm.reset();
      }
    });
  }

  submitForm() {
    if (this.productForm.valid) {
      const updatedProduct: Product = {
        ...this.product(),
        ...this.productForm.value,
        updatedAt: new Date().toISOString(),
      };
      if (!this.product) {
        updatedProduct.createdAt = new Date().toISOString();
      }
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: ` ${updatedProduct.name} is updated successfully im in formpage`,
        showConfirmButton: false,
        timer: 2700,
      });
      this.updateProduct.emit(updatedProduct); // emit the updated product
    }
  }
}
