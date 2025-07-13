import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Nav } from "../layout/nav/nav";
import { AccountService } from '../core/services/account-service';
import { User } from '../types/user';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Nav, RouterOutlet, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private accountService = inject(AccountService);
  private http = inject(HttpClient);
  protected router = inject(Router);
  protected readonly title = 'Dating app';
  protected members = signal<User[]>([]);

  async ngOnInit() {
    const membersData = await this.getMembers();
    this.members.set(membersData);
    this.setCurrentUser();
  }
  setCurrentUser() {
    const user = localStorage.getItem('user');
    if (user) {
      this.accountService.currentUser.set(JSON.parse(user));
    }
  }

  async getMembers() {
    try {
      return lastValueFrom(this.http.get<User[]>('https://localhost:5001/api/members'));
    } catch (error) {
      console.error(error);
      return []; // Return empty array as fallback
    }
  }
}
