import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div class="container">
      <app-login (login)="result($event)"></app-login>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [
  ]
})
export class AppComponent {
  title = 'LoginDemo';

  result(event){
    console.log(event)
  }
}
