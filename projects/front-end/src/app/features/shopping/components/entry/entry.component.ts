import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { shoppingItemAdded } from '../../state/actions/item.events';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css'],
})
export class EntryComponent {
  form = this.formBuilder.group({
    description: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(20)],
    ],
  });

  constructor(private formBuilder: FormBuilder, private store: Store) {}

  get description() {
    return this.form.get('description');
  }

  addItem(el: HTMLInputElement) {
    if (this.form.valid) {
      const description = this.description?.value;
      this.store.dispatch(shoppingItemAdded({ payload: description }));
      el.value = '';
      el.focus();
    } else {
      console.log(this.form.get('description')?.errors);
    }
  }
}
