import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes:string[]=['Spiderman','Hulk','Superman','Batman'];
  valor:string='';
  contador:boolean=false;

  borrarHeroe(){
    this.valor=this.heroes.shift()||'';
    this.contador=true;

  }

}
