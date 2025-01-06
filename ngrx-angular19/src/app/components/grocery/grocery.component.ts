import { Component, Signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Grocery } from '../../../models/grocery.model';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import {
  addToBucket,
  removeFromBucket,
} from '../../store/actions/bucket.action';
import {
  selectGroceries,
  // selectGroceries,
  selectGroceryByType,
} from '../../store/selectors/grocery.selectors';

@Component({
  selector: 'app-grocery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grocery.component.html',
  styleUrl: './grocery.component.css',
})
export class GroceryComponent {
  groceries$?: Observable<Grocery[]>;
  filteredGroceries$?: Observable<Grocery[]>;

  constructor(private _store: Store<{ groceries: Grocery[] }>) {
    // this.groceries$ = _store.select('groceries'); // OR
    this.groceries$ = _store.select(selectGroceries); // OR
    // this.groceries$ = _store.select(selectGroceryByType);
    // _store.select(selectGroceryByType).subscribe((data) => console.log(data));
  }

  onTypeChange(event: Event) {
    const selectedType = (event.target as HTMLSelectElement).value;
    if (selectedType) {
      this.filteredGroceries$ = this._store.select(
        selectGroceryByType(selectedType)
      );
    } else {
      this.filteredGroceries$ = undefined;
    }
  }
  
  increment(item: Grocery) {
    const payload = {
      id: item.id,
      name: item.name,
      quantity: 1,
    };

    // this._store.dispatch({ type: 'Update', payload });
    this._store.dispatch(addToBucket({ payload: payload }));
  }
  decrement(item: Grocery) {
    const payload = {
      id: item.id,
    };

    this._store.dispatch(removeFromBucket({ payload: payload }));
  }
}
