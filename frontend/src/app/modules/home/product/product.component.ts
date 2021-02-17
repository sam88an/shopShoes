import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  ProductModelServer,
  serverResponse,
} from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products: ProductModelServer[] = [];

  constructor(
    private productService: ProductService,

    private router: Router
  ) {}

  ngOnInit() {
    this.productService.getAllProducts(8).subscribe((prods: serverResponse) => {
      this.products = prods.products;
      console.log(this.products);
    });
  }
  // AddProduct(id: Number) {
  //   this.cartService.AddProductToCart(id);
  // }

  selectProduct(id: Number) {
    this.router.navigate(['/product', id]).then();
  }
}
