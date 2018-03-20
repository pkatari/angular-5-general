import { Component, OnInit,Input, AfterViewInit,ViewChildren,QueryList} from '@angular/core';
import {ViewchildComponent} from './viewchild/viewchild.component';

@Component({
    selector: 'my-app',
    template: `
      <app-viewchild></app-viewchild>
      <app-viewchild type="danger"></app-viewchild>
      <app-viewchild type="info"></app-viewchild>
    `,
  })
  export class ViewChildTestComponent implements AfterViewInit {

    @ViewChildren(ViewchildComponent) alerts: QueryList<ViewchildComponent>
    
    ngAfterViewInit() {
      this.alerts.forEach(alertInstance => console.log(alertInstance));
    }
  }