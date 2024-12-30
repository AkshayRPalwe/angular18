import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-associate',
  standalone: false,

  templateUrl: './add-associate.component.html',
  styleUrl: './add-associate.component.scss',
})
export class AddAssociateComponent implements OnInit {
  title = 'Create Associate';
  associateForm?: any;
  isEdit = false;
  dialogData: any;

  constructor(
    private _formBuilder: FormBuilder,
    private _matDialogRef: MatDialogRef<AddAssociateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    debugger;
    this.initializeForm();
    this.dialogData = this.data;
    this.title = this.dialogData.title;
  }

  initializeForm() {
    this.associateForm = this._formBuilder.group({
      id: this._formBuilder.control(0),
      name: this._formBuilder.control('', Validators.required),
      email: this._formBuilder.control(
        '',
        Validators.compose([Validators.required, Validators.email])
      ),
      phone: this._formBuilder.control('', Validators.required),
      address: this._formBuilder.control('', Validators.required),
      type: this._formBuilder.control('CUSTOMER'),
      group: this._formBuilder.control('level1'),
      status: this._formBuilder.control(true),
    });
  }

  saveAssociate() {
    if (this.associateForm.valid) {
    }
  }

  closePopup() {
    this._matDialogRef.close();
  }
}
