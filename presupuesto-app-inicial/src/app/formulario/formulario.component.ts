import { EgresoServicio } from './../egreso/egreso.service';
import { IngresoServicio } from './../ingreso/ingreso.service';
import { Component, OnInit } from '@angular/core';
import { Ingreso } from '../ingreso/ingreso.model';
import { Egreso } from '../egreso/egreso.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  tipo:string="ingresoOperacion";

  descripcionInput:string;
  valorInput: number;

  constructor(private ingresoServicio: IngresoServicio, private egresoServicio: EgresoServicio) { }

  ngOnInit() {
  }

  tipoOperacion(event){
    this.tipo = event.target.value;
  }

  agregarValor(){
    if(this.tipo === "ingresoOperacion"){
      this.ingresoServicio.ingresos.push(new Ingreso(this.descripcionInput, this.valorInput));
    }else if(this.tipo === "egresoOperacion"){
      this.egresoServicio.egresos.push(new Egreso(this.descripcionInput, this.valorInput));
    }
  }

}
