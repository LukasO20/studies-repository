import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  imports: [MatButtonModule],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.scss',
})
export class ProductCreateComponent {

    constructor(private productService: ProductService,
      private router: Router
    ) { }

    ngOnInit(): void {
    }

    product: Product = {
      name: 'Angular Test product',
      price: 1950.89
    }

    createProduct(): void {
      this.productService.create(this.product).subscribe(() => { 
        this.productService.showMessage('Product was created!')
        this.router.navigate(['/products'])
      })
    }

    cancelProduct(): void {
      this.router.navigate(['/products'])
    }
}
