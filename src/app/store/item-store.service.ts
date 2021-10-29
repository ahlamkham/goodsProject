import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemStoreService {

  private item: Item | undefined;

  constructor() { }

  get value(): Item | undefined {
    return this.item;
  }

  setItem(item: Item): void {
    this.item = item;
  }

  format(): void {
    this.item = undefined;
  }

}
