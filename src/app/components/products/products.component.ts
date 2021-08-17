import { Component, OnInit } from '@angular/core';
// Operadores
import { Observable } from 'rxjs';
// Servicios
import { ProductsService } from '../../services/products.service';
// Modelo de datos
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]>;
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.products$ = this.productsService.getProducts();
  }

}
