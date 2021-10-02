import {Product} from "../../shared/models/product.model";
import {createAction, props} from "@ngrx/store";

export const getProducts = createAction('[Products] GET_PRODUCTS');
export const getProductsSuccess = createAction('[Products] GET_PRODUCTS_SUCCESS', props<{ products: Product[] }>());
export const getProductsError = createAction('[Products] GET_PRODUCTS_ERROR');
