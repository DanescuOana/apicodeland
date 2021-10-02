import {Product} from "../../shared/models/product.model";
import {getProducts, getProductsSuccess} from "../actions/product.actions";
import {Action, createReducer, on} from "@ngrx/store";

const initialState: Product = {
  skuId: 1,
  name: "Honey",
  url: "blaaa",
  description: "Thi is honey description",
  categoryList: []
}

export const productsReducer = createReducer(
  [initialState],
  on(getProductsSuccess, (state, { products }) => products)
);
