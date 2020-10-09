import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-pipes';
  todayDate =  Date.now();
  num: number = 100;
  curr: number = 100;
  msg:string= 'Angular 8.0 is a Component Based Frameworks';
}
