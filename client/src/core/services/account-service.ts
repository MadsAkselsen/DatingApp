import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private hhtp = inject(HttpClient);

  baseUrl = 'https://localhost:5001/api/';

  login(creds: any) {
    return this.hhtp.post(this.baseUrl + 'account/login', creds);
  }
}
