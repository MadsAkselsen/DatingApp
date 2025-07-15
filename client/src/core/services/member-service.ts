import { inject, Injectable } from '@angular/core';
import { Member } from '../../types/member';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AccountService } from './account-service';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private http = inject(HttpClient);
  private baseUrl = environment.apiUrl;
  private accountService = inject(AccountService);

  getMembers() {
    return this.http.get<Member[]>(`${this.baseUrl}members`, this.getHttpOptions());
  }

  getMember(id: number) {
    return this.http.get<Member>(`${this.baseUrl}members/${id}`, this.getHttpOptions());
  }

  private getHttpOptions() {
    return {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.accountService.currentUser()?.token
      })
    }
  }
}
