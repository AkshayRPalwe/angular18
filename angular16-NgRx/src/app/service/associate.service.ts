import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Associates } from '../store/model/associate.model';

@Injectable({
  providedIn: 'root',
})
export class AssociateService {
  baseUrl =
    'https://silver-space-journey-74w666j54w7cwr79-3000.app.github.dev/';

  constructor(private _http: HttpClient) {}

  getAllAssociates() {
    return this._http.get<Associates[]>(this.baseUrl);
  }

  getAssociateByCode(code: number) {
    return this._http.get<Associates>(`${this.baseUrl}/${code}`);
  }

  deleteAssociateByCode(code: number) {
    return this._http.delete(`${this.baseUrl}/${code}`);
  }

  updateAssociateByCode(data: Associates) {
    return this._http.put(`${this.baseUrl}/${data.id}`, data);
  }

  createAssociate(data: Associates) {
    return this._http.post(this.baseUrl, data);
  }
}
