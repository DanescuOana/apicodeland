import {createAction, props} from "@ngrx/store";
import {Product} from "../../shared/models/product.model";

export const addProductToCart = createAction('[Cart] ADD_PRODUCT_TO_CART', props<{ product: Product }>());
export const removeProductFromCart = createAction('[Cart] REMOVE_PRODUCT_FROM_CART', props<{ product: Product }>());
export const clearCart = createAction('[Cart] CLEAR_CART');
