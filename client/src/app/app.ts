import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private http = inject(HttpClient);
  protected readonly title = 'client';
  protected members = signal<any>([]);

  async ngOnInit() {
    const membersData = await this.getMembers();
    this.members.set(membersData);
  }

  async getMembers() {
    try {
      return lastValueFrom(this.http.get<any[]>('https://localhost:5001/api/members'));
    } catch (error) {
      console.error(error);
      return []; // Return empty array as fallback
    }
  }
}
