import { Component } from '@angular/core';
import { Product, PRODUCTS } from '../../Data/Product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [RouterLink, CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  product: Product | undefined;
  products = PRODUCTS;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  // ngOnInit(): void {
  //   this.route.params.subscribe((params) => {
  //     const productId = +params['id']; // Convert string to number
  //     this.product = this.productService.getProductById(productId);
  //   });
  // }

  //fetching based on route
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productService.getProductById(id);
  }
}
