import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template :`
  <div><app-about [title]="title" (change)="onUpdateMe($event)"></app-about>
  <p>count in parent : {{count}} </p>
  </div>`    
})
export class AppComponent {
  title = 'app';
  count:number

  constructor() {
    this.count=4;
  }
  onUpdateMe($event){
    console.log("onupdate me inside parent");

   this.count = $event;
  }
}
