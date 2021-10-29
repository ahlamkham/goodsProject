import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-show-goods',
  templateUrl: './show-goods.component.html',
  styleUrls: ['./show-goods.component.scss']
})
export class ShowGoodsComponent implements OnInit {

  items: Item[] = [];

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.itemsService.findAll().subscribe((res: Item[]) => {
      this.items = res;
    });
  }

}
