import { Component, OnInit,ContentChild } from '@angular/core';
import {MessageComponent } from './message.component';
@Component({
  selector: 'app-messagecontainer',
  template: `
  <div>
  <h3>{{greetMessage}}</h3>
  <ng-content select ="app-message2"></ng-content>
  </div>
  `
})
export class Contentchild1Component{

  greetMessage = 'Ignite UI Rocks!';
  @ContentChild(MessageComponent) MessageComponnetContentChild: MessageComponent;
  ngAfterContentInit() {
      console.log(this.MessageComponnetContentChild);
  }

}
