import { Component,Input,Output,EventEmitter, OnInit, DoCheck, OnChanges, AfterContentChecked, AfterViewChecked, AfterContentInit } from '@angular/core';
 
@Component({
    selector : 'child-comp',
    template : `<div>
    <p>Counting in child : {{counting}}</p>
    <button (click)="updateCount()">Click Inside Child</button>
    </div>`
})
export class AboutComponent implements OnInit,DoCheck,OnChanges,AfterContentChecked,AfterViewChecked,AfterContentInit,AfterViewChecked{
    @Input(`parentCount`)
    counting :number
    @Output()
    change : EventEmitter<number> = new EventEmitter<number>();
 
    constructor() {
      console.log("Child constructor called")
    }

  updateCount() {
    this.counting++;
    this.change.emit(this.counting);
  }

  ngOnInit(){
    console.log('Child ngOnInit() called');
  }
  
  ngOnChanges(){
    console.log('Child ngOnChanges() called');
  }
  
  ngDoCheck(){
    console.log('Child ngDoCheck() called');
  }
  
  ngAfterViewChecked(){
    console.log('Child AfterViewChecked() called');
  } 
  
  ngAfterViewInit(){
    console.log('Child ngAfterViewInit() called');
  }
  
  ngAfterContentInit(){
    console.log('Child ngAfterContentInit() called');
  }
  
  ngAfterContentChecked(){
    console.log('Child ngAfterContentChecked() called');
  }
  
  ngOnDestroy(){
    console.log('Child ngOnDestroy() called');
  } 
};