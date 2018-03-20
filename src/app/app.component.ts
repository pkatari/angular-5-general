import { Component, OnInit, OnChanges, DoCheck, AfterViewChecked, AfterViewInit, AfterContentInit, AfterContentChecked } from '@angular/core';
import { AboutComponent } from './about/about.component';
@Component({
   selector : 'app-root',
   template : `
    <div>
     <child-comp [parentCount]="count" (change)="updateFromChild($event)"></child-comp>
     <p>count in parent : {{count}} </p>
     <p>ans is : {{ans}}</p>
    </div>
   `
})
export class AppComponent implements OnInit,OnChanges,DoCheck,AfterViewChecked,AfterViewInit,AfterContentInit,AfterContentChecked{
      count:number;
      ans :number;
      constructor() {
        console.log("Inside App Consturctor");
        this.count =50;
        this.ans =0;
      }
      updateFromChild($event) {
        this.count++;
        this.ans++;
      }
      ngOnChanges(){
        console.log('Parent ngOnChanges() called');
      }

      ngOnInit() {
        console.log("Parent ngOnit called")
      }
      
      ngDoCheck(){
        console.log('Parent ngDoCheck() called')
      }
      
      ngAfterViewChecked(){
        console.log('Parent AfterViewChecked() called');
      } 
      
      ngAfterViewInit(){
        console.log('Parent ngAfterViewInit() called');
      }
      
      ngAfterContentInit(){
        console.log('Parent ngAfterContentInit() called');
      }
      
      ngAfterContentChecked(){
        console.log('Parent ngAfterContentChecked() called');
      }
      
      ngOnDestroy(){
        console

};
