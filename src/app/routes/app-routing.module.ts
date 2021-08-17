import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Componentes
import { ProductsComponent } from '../components/products/products.component';
import { ProductDetailsComponent } from '../components/product-details/product-details.component';

const routes: Routes = [
  { path: '', component: ProductsComponent, },
  { path: 'products/:productId', component: ProductDetailsComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
