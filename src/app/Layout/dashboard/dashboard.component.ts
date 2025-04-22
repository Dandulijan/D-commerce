import { Component, computed, inject } from '@angular/core';

import { Color, NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-dashboard',
  imports: [NgxChartsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  productService = inject(ProductService);
  products$ = this.productService.products$;

  chartData = computed(() =>
    this.products$().map((p) => ({ name: p.name, value: p.price }))
  );
  chartData2 = computed(() =>
    this.products$().map((p) => ({ name: p.name, value: p.stock }))
  );
  lineChartData = computed(() => ({
    name: 'Product Sales',
    series: this.products$().map((p) => ({
      name: p.name,
      value: p.status,
    })),
  }));

  view: [number, number] = [700, 400];
  colorScheme: Color = {
    name: 'customScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#85ffc7', '#abdad3', '#ef5350', '#73bec8'],
  };
  // colorScheme = {
  //   domain: ['#85ffc7', '#abdad3', '#ef5350'],
  // };
}
