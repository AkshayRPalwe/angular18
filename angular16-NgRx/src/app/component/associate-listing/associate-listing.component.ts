import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddAssociateComponent } from '../add-associate/add-associate.component';
import { Store } from '@ngrx/store';
import { loadAssociate } from '../../store/associates/associate.action';
import { Associates } from '../../store/model/associate.model';
import { getAssociateList } from '../../store/associates/associate.selector';

@Component({
  selector: 'app-associate-listing',
  standalone: false,

  templateUrl: './associate-listing.component.html',
  styleUrl: './associate-listing.component.scss',
})
export class AssociateListingComponent implements OnInit {
  associatesList?: Associates[];

  constructor(private _matDialog: MatDialog, private _store: Store) {}

  ngOnInit() {
    this._store.dispatch(loadAssociate());

    this._store.select(getAssociateList).subscribe((item) => {
      this.associatesList = item;
      console.log(this.associatesList);
    });
  }

  functionAdd() {
    this.openPopup(0, 'Create Associate');
  }

  openPopup(code: number, title: string) {
    this._matDialog.open(AddAssociateComponent, {
      width: '50%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
      data: {
        code: code,
        title: title,
      },
    });
  }
}
