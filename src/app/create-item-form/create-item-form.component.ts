import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Item } from '../models/item';
import { ItemsService } from '../services/items.service';
import { ItemStoreService } from '../store/item-store.service';

@Component({
  selector: 'app-create-item-form',
  templateUrl: './create-item-form.component.html',
  styleUrls: ['./create-item-form.component.scss']
})
export class CreateItemFormComponent implements OnInit {

  form!: FormGroup;
  item: Item | undefined;
  id!: number;

  constructor(private fb: FormBuilder, private itemsService: ItemsService, private router: Router, private itemStore: ItemStoreService) { }

  ngOnInit(): void {
    this.item = this.itemStore.value;
    if (this.item === undefined) {
      this.form = this.fb.group({
        nameField: ['', Validators.required],
        originField: ['', Validators.required],
        priceField: ['', [Validators.required, Validators.min(0)]]
      }
      )
    } else {
      this.id = this.item.id;
      this.form = this.fb.group({
        nameField: [this.item.name, Validators.required],
        originField: [this.item.origin, Validators.required],
        priceField: [this.item.price, [Validators.required, Validators.min(0)]]
      }
      )
      this.itemStore.format();
    }
  }

  createUpdate(): void {
    if (this.item === undefined) {
      this.create()
    } else {
      this.update()
    }
  }

  create() {
    if (this.form.valid) {
      this.itemsService.create({
        name: this.form.controls.nameField.value,
        origin: this.form.controls.originField.value,
        price: this.form.controls.priceField.value,
      }).subscribe(() => {
        this.router.navigate(['show']);
      });
    }
  }

  update() {
    if (this.form.valid) {
      this.itemsService.update(this.id, {
        name: this.form.controls.nameField.value,
        origin: this.form.controls.originField.value,
        price: this.form.controls.priceField.value,
      }).subscribe(() => {
        this.router.navigate(['show']);
      });
    }
  
  }

}
