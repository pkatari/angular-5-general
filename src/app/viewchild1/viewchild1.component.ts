
import { Component, Input } from '@angular/core';
@Component({
    selector: 'app-message',
    template: `<h2>{{message}}</h2>
     <h2>{{count}}</h2>
    `
})
export class Viewchild1Component {
    @Input() message: string;
    count :number = 1;

    ngAfterViewInit() {
      console.log("child ng after view init")
    }

    ngAfterViewChecked() {
      console.log("child ng after view checked")
    }

    ngAfterContentInit() {
      console.log("child ng after content init")
    }

    ngAfterContentChecked() {
      console.log("child ng after content checked")
    }
 
}