
import { ChangeDetectorRef,ViewChildren,QueryList,Component, OnInit,ViewChild, AfterViewInit, AfterViewChecked, AfterContentChecked, AfterContentInit } from '@angular/core';
import {ViewchildrenComponent } from './viewchildren/viewchildren.component';

@Component({
    selector: 'my-app',
    template: `
        <div>
        <h1>Messages</h1>
        <app-message1 *ngFor="let f of messages" [message]='f'></app-message1>
        </div>`
})
export class ViewChildren1Component implements OnInit,AfterViewInit,AfterViewChecked,AfterContentChecked,AfterContentInit {
    messages: any;
    @ViewChildren(ViewchildrenComponent) messageViewChildren: QueryList<ViewchildrenComponent>;

    constructor(private cd: ChangeDetectorRef) {
    }

    ngOnInit() {
        this.messages = this.getMessage();
    }
    getMessage() {
        return [
            'Hello India',
            'Which team is winning Super Bowl? ',
            'Have you checked Ignite UI ?',
            'Take your broken heart and make it to the art'
        ];
    }
    ngAfterViewInit() {
        console.log(this.messageViewChildren);
        this.messageViewChildren.forEach((item) => { item.message = 'Infragistics'; });
        this.cd.detectChanges();
    }
 

    ngAfterViewChecked() {
      console.log("Parent NG after view checked");
    }

    ngAfterContentInit() {
      console.log("parent ng after content init");
    }

    ngAfterContentChecked() {
      console.log("parent ng after content checked");
    }


}