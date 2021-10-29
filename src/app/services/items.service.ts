import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Item } from '../models/item';
import { ItemCreateRequest } from '../requests/item-create-request';
import { ItemUpdateRequest } from '../requests/item-update-request';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private items: Item[] = [
    {
      id: 1,
      name: 'raclette',
      origin: 'France',
      price: 2.50
    },
    {
      id: 2,
      name: 'pomme',
      origin: 'Maroc',
      price: 1
    },
    {
      id: 3,
      name: 'farine',
      origin: 'Algeria',
      price: 5
    }
  ]

  constructor() { }

  findAll(): Observable<Item[]> {
    return of(this.items);
  }

  create(itemCreateRequest: ItemCreateRequest): Observable<number> {
    const id = Math.max(...this.items.map(item => item.id)) + 1; 
    this.items.push({
      id: id,
      name: itemCreateRequest.name,
      origin: itemCreateRequest.origin,
      price: itemCreateRequest.price
    });
    return of(id);
  }

  update(id: number, itemUpdateRequest: ItemUpdateRequest): Observable<any> { 
    this.items[this.items.findIndex(item => item.id === id)] = {
      id: id,
      name: itemUpdateRequest.name,
      origin: itemUpdateRequest.origin,
      price: itemUpdateRequest.price
    };
    return of({});
  }

  delete(id: number) {
    this.items.splice(this.items.findIndex(item => item.id === id), 1);
  }

}
