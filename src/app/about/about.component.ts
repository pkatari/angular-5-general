import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-about',
  template:`
  <h1>I am child component</h1>
  <h1>{{count}}</h1>
  <button (click)="updateCount()">Click Inside Child</button>
  `
})
export class AboutComponent implements OnInit {

  @Input()
  title:string
  count:number
  @Output()
    change : EventEmitter<number> = new EventEmitter<number>();
 
  constructor() { 
    this.count =0;
  }

  ngOnInit() {
  }
  updateCount() {
    console.log("Update count inside child")
    this.count++;
    this.change.emit(this.count);
  }

}
