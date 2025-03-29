import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from '../../../views/home/home.component';
import { ProductCrudComponent } from '../../../views/product-crud/product-crud.component';

@Component({
  selector: 'app-nav',
  imports: [MatListModule, MatSidenavModule, HomeComponent, ProductCrudComponent, RouterOutlet, RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

}