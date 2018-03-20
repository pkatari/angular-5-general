import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  template: `
  <div>
    <h1 (click)="alert()">{{type}}</h1>
  </div>
`,
  styleUrls: ['./viewchild.component.scss']
})

export class ViewchildComponent implements OnInit {
  @Input() type: string = "success";
  
  alert() {
    console.log("alert");
  }

  ngOnInit() {
  }

}