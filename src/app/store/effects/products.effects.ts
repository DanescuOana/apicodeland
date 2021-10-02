import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {map, switchMap} from "rxjs/operators";
import {ProductsService} from "../../shared/service/products.service";
import * as ProductActions from '../actions/product.actions';

@Injectable()
export class ProductsEffects {

  constructor(private actions$: Actions, private productsService: ProductsService) {
  }

  getProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.getProducts),
      switchMap(action =>
        this.productsService.getJSON().pipe(
          map(products => ProductActions.getProductsSuccess({products}))
        ),
      ),
    ),
  );
}
