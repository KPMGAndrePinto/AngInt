import { Component } from '@angular/core';

@Component({
  selector: 'myorg-root',
  template: `
    <h1 title="Welcome admin">Welcome admin</h1>
    <myorg-banner title="Welcome to admin main page"> </myorg-banner>
  `,
})
export class AppComponent {
  title: string;
  constructor() {
    this.title = 'admin';
  }
}
