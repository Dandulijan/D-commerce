import { Component, computed, inject } from '@angular/core';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { USERS } from '../../Data/Users';

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
  users = USERS;
  getTotalSales = computed(() => {
    return this.products$().reduce((total, product) => {
      if (product.status === 'out-of-stock') {
        return total + product.price * product.stock;
      }
      return total;
    }, 0);
  });
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
      value: p.rating,
    })),
  }));

  PieChart = computed(() => ({
    name: 'Top Categories',
    series: this.products$().map((p) => ({
      name: p.name,
      value: p.category,
    })),
  }));

  view: [number, number] = [700, 400];
  colorScheme: Color = {
    name: 'customScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#638387', '#AEC2C2', '#3A5356', '#0C2327'],
  };
}
