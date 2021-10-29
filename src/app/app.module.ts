import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowGoodsComponent } from './show-goods/show-goods.component';
import { ItemActionsComponent } from './item-actions/item-actions.component';
import { CreateItemFormComponent } from './create-item-form/create-item-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ShowGoodsComponent,
    ItemActionsComponent,
    CreateItemFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
