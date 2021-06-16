import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre:string = 'Susana';
  genero:string = 'femenino';
  inviteMap = {'masculino': 'invitarlo', 'femenino': 'invitarla', 'other': 'invitarlos'};

  //i18nPlural
  clientesMap = {
    '=0': 'No tenemos ningún cliente esperando.', 
    '=1': 'Tenemos un cliente esperando.', 
    'other': 'Tenemos # clientes esperando.'};

  clientes: string[] = ['Amparo','Pepe','Juan', 'Melisa','Alberto','Claudia'];
  
  //KeyValuePipe
  persona ={
    nombre:'Fernando',
    edad:35, 
    direccion:'Madrid'
  }

  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Aquaman',
      vuela: false
    },
    {
      nombre: 'Batman',
      vuela: false
    }
  ]

  //Async Pipe
  miObsevable = interval(1000);
  i:number=0;
  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(()=>{resolve('Tenemos una promesa')}, 3500)
  });

  cambiarCliente(){
    this.nombre = 'Sergio';
    this.genero = 'masculino';
  }

  eliminarCliente(){
    this.clientes.shift();
  }

}
