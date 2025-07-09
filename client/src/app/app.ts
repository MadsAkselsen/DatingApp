import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private http = inject(HttpClient);
  protected readonly title = 'client';

  ngOnInit() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts').subscribe({
      next: response => console.log(response),
      error: error => console.error(error),
      complete: () => console.log('complete')
    });
  }
}
