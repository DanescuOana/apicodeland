import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {ProductsEffects} from "./effects/products.effects";
import {ProductsSelectors} from "./services/products.selectors";
import {ProductsDispatchers} from "./services/products.dispatchers";
import {reducers, metaReducers} from "./reducers/app.state";
import {NgModule} from "@angular/core";

@NgModule({
  imports: [
    StoreModule.forFeature('entityCache', reducers, { metaReducers }),
    EffectsModule.forFeature([ProductsEffects]),
  ],
  providers: [ProductsDispatchers, ProductsSelectors],
  exports: [StoreModule, EffectsModule],
})
export class AppStoreModule {}
