import {Product} from "../../shared/models/product.model";
import {ActionReducer, ActionReducerMap, MetaReducer} from "@ngrx/store";
import {productsReducer} from "./product.reducers";
import {environment} from "../../../environments/environment.prod";

export interface EntityState {
  products: Product[];
  //cart: number[];
}

export const reducers: ActionReducerMap<EntityState> = {
  products: productsReducer,
  // here is where i put other reducers, when i have them
};

function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<EntityState>[] = !environment.production ? [debug] : [];
