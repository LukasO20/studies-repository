import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-product-create',
  imports: [MatButtonModule, FormsModule, MatFormFieldModule, MatInputModule, MatCardModule],
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
      name: '',
      price: undefined
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
