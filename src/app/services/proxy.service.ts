import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  url = "https://ecm-auth-api-dev.humanage.app/api";

  private http = inject(HttpClient);

  getAccess(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/AppSwitch/GetAccess`);
  }
}
