import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateItemFormComponent } from './create-item-form/create-item-form.component';
import { ShowGoodsComponent } from './show-goods/show-goods.component';

const routes: Routes = [{
  path: 'show', component: ShowGoodsComponent
}, {
  path: '', component: ShowGoodsComponent
}, {
  path: 'create-item', component: CreateItemFormComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
