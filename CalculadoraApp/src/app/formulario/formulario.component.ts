import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent{

  opA:number;
  opB:number;

  @Output() resultadoSuma = new EventEmitter<number>();

  sumar():void{
    let resultado = this.opA + this.opB;
    this.resultadoSuma.emit(resultado);
  }

}
