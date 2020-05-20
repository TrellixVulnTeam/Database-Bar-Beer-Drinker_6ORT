import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModificationService {

  constructor(
    public http: HttpClient
    ) { }

    getModification() {
      return this.http.get<any[]>('/api/modification');
    }
}
