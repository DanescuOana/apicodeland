import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './shared/main/main.component';
import {AppRoutingModule} from "./app-routing.module";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {AppStoreModule} from "./store/app-store.module";
import {HttpClientModule} from "@angular/common/http";
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import {MaterialModule} from "./shared/material.module";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MainComponent,
    ProductListComponent,
    ToolbarComponent
  ],
  imports: [
    AppRoutingModule,
    AppStoreModule,
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
