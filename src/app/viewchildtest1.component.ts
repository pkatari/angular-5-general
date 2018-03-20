
import { Component, OnInit,ViewChild, AfterViewInit, AfterViewChecked, AfterContentChecked, AfterContentInit } from '@angular/core';
import {Viewchild1Component } from './viewchild1/viewchild1.component';

@Component({
    selector: 'my-app',
    template: `
  <div>
  <h1>Messages</h1>
  <app-message [message]='message'></app-message>
  <app-message [message]='message'></app-message>
  </div>`
})
export class ViewChildTest1Component implements OnInit,AfterViewInit,AfterViewChecked,AfterContentChecked,AfterContentInit {
    message: any;
    @ViewChild(Viewchild1Component) msgViewChild : Viewchild1Component;

    constructor() {}
    ngOnInit() {
        this.message = 'Hello World1 !';
    }
    ngAfterViewInit() {
        console.log("parent NG after view init")
        console.log(this.msgViewChild);
    }

    ngAfterViewChecked() {
      console.log("Parent NG after view checked");
    }

    ngAfterContentInit() {
      console.log("parent ng after content init");
    }

    ngAfterContentChecked() {
      console.log("parent ng after content checked");
      this.msgViewChild.message = "Hello I am Changed"
    }


}