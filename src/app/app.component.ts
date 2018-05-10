import { Component } from '@angular/core'

@Component({
  selector: 'app-component',
  template: `
    <nav>
      <a routerLink="/">Home</a>
      <a routerLink="/dashboard">Dashboard</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
