import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // public title = 'app';

  public title = 'AG study';

  public logo = 'assets/images/logo.png';

  public width = 50;

  public placeholder = 'Please search';

  // public count = 3;

  // public constructor() {
  //   setTimeout(() => {
  //     this.title = 'Timeouted TITLE! ololo';
  //   }, 3000);
  // }
  //
  // public getValue() {
  //   return 4;
  // }
}
