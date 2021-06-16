import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
  nombreLower: string ='fernando';
  nombreUpper: string ='FERNANDO';
  nombreTitle: string ='fErnAndO HeRrerA';
  fecha: Date = new Date();

}
