import { Component, OnInit } from '@angular/core';
import {ProductsSelectors} from "../../store/services/products.selectors";
import {ProductsDispatchers} from "../../store/services/products.dispatchers";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products$ = this.productsSelectors.products$;

  constructor(private productsSelectors: ProductsSelectors, private productsDispatchers: ProductsDispatchers) { }

  ngOnInit(): void {
    this.productsDispatchers.getProducts();
  }
}
