// selectors
import {Injectable} from "@angular/core";
import {EntityState} from "../reducers/app.state";
import {createFeatureSelector, createSelector, Store} from "@ngrx/store";

const getEntityState = createFeatureSelector<EntityState>('entityCache');
const getProducts = createSelector(getEntityState, (state: EntityState) => state.products);

@Injectable()
export class ProductsSelectors {
  constructor(private store: Store<EntityState>) {}

  products$ = this.store.select(getProducts);
}
