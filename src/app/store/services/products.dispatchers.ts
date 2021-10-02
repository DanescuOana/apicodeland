import {Store} from "@ngrx/store";
import {EntityState} from "../reducers/app.state";
import {Injectable} from "@angular/core";
import {getProducts} from "../actions/product.actions";

@Injectable()
export class ProductsDispatchers {
  constructor(private store: Store<EntityState>) {}

  public getProducts(): void {
    this.store.dispatch(getProducts());
  }
}
