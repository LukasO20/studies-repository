import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ProductReadComponent } from '../../components/product/product-read/product-read.component'; 

@Component({
  selector: 'app-product-crud',
  imports: [MatButtonModule, ProductReadComponent],
  templateUrl: './product-crud.component.html',
  styleUrl: './product-crud.component.scss'
})
export class ProductCrudComponent implements OnInit {

  constructor (private router: Router) {}

  ngOnInit(): void {
    
  }

  navigateToProductCreate(): void {
    this.router.navigate(['/product/create'])
  }
}
