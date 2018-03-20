import { Component,Input} from '@angular/core';

@Component({
    selector: 'app-message2',
    template: `<h2>Msg is :{{message}}</h2>
    `
})
export class MessageComponent {
    @Input() message:string="Jai Mata Di"
    
}