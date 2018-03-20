import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'greet',
  template: `<div class="container"> 
  {{message}}
    <ng-content></ng-content>
  </div>`
})
export class ContentprojectionComponent implements OnInit {
  @Input() message: string = "Hello There !"
  constructor() { }

  ngOnInit() {
  }

}
