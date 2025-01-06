import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GroceryComponent } from './components/grocery/grocery.component';
import { BucketComponent } from './components/bucket/bucket.component';
import { Store } from '@ngrx/store';
import { Grocery } from '../models/grocery.model';
import { selectGroceryByType } from './store/selectors/grocery.selectors';

@Component({
  selector: 'app-root',
  imports: [GroceryComponent, BucketComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ngrx-angular19';
  // constructor(private _store: Store<{ groceries: Grocery[] }>) {
  //   // this.groceries$ = _store.select('groceries'); // OR
  //   // this.groceries$ = _store.select(selectGroceries); // OR
  //   // this.groceries$ = _store.select(selectGroceryByType);
  //   _store.select(selectGroceryByType).subscribe((data) => console.log(data));
  // }
}
