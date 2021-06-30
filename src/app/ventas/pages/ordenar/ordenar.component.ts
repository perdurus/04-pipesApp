import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  esMayuscula:boolean = true;
  ordenarPor:string = '';

  heroes: Heroe[] = [
    {nombre:'Superman', vuela:true, color: Color.azul},
    {nombre:'Batman', vuela:false, color: Color.negro},
    {nombre:'Robin', vuela:false, color: Color.verde},
    {nombre:'Greenlanter', vuela:true, color: Color.verde}
  ]


  changeCase(){
    this.esMayuscula = !this.esMayuscula;
  }

  ordenarPorCampo(campo:string){
    console.log(campo);

    this.ordenarPor = campo;
  }
}
