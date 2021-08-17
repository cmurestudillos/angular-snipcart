import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
// Servicios
import { ProductsService } from '../../services/products.service';
// Modelo de datos
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  id: string;
  product: Product | null;
  constructor(private route: ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit(): void {
    this.route.params
    .pipe(map(p => p.productId))
    .subscribe(id => {
      this.productsService.getProductById(id).subscribe(product => {
        this.product = product
      });
    }); 
  }

}
