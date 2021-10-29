import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../models/item';
import { ItemsService } from '../services/items.service';
import { ItemStoreService } from '../store/item-store.service';

@Component({
  selector: 'app-item-actions',
  templateUrl: './item-actions.component.html',
  styleUrls: ['./item-actions.component.scss']
})
export class ItemActionsComponent implements OnInit {

  @Input() item!: Item;

  constructor(private itemsService: ItemsService, private itemStore: ItemStoreService, private router: Router) { }

  ngOnInit(): void {
    
  }

  delete() {
    this.itemsService.delete(this.item.id);
  }

  edit() {
    this.itemStore.setItem(this.item);
    this.router.navigate(['create-item']);
  }

}
