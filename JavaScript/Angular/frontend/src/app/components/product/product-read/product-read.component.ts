import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-read',
  imports: [CommonModule],
  templateUrl: './product-read.component.html',
  styleUrl: './product-read.component.scss'
})
export class ProductReadComponent implements OnInit {

  products: Product[] = []
  displayedColumn = ['id', 'name', 'price']

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
      console.log(products)
    })
  }
}
