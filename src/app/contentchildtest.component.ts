import { Component} from '@angular/core';


@Component({
    selector: 'my-app',
    template: `
    <app-messagecontainer>
    <app-message2 [message]='message'></app-message2>
    </app-messagecontainer>
    `,
  })
  export class ContentChildTest {

    message: any;
    ngOnInit() {
        this.message = 'Hello World1 !';
    }
  }