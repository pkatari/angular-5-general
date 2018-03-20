import { Component, OnInit,Input } from '@angular/core';

@Component({

  selector: 'app-message1',
  template: `<h2>{{message}}</h2>
  `
})
export class ViewchildrenComponent  {

  @Input() message: string;
}
