import { PersonaService } from './../personas.service';
import { LoggingService } from './../LoggingService.service';
import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent{

  // @Output() personaCreada  = new EventEmitter<Persona>();

  nombreInput: string = '';
  apellidoInput: string = '';

  // @ViewChild('nombreRef') nombre: ElementRef;
  // @ViewChild('apellidoRef') apellido: ElementRef;

  constructor(private loggingService: LoggingService,
              private personaService: PersonaService){
                this.personaService.saludar.subscribe(
                  (indice: number)=>{
                    alert('El indice es: ' + indice);
                  }
                );
              }

  agregarPersona(){
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    // this.loggingService.enviarMensajeAConsola('Enivamos persona: ' + persona1.nombre + ' ' + persona1.apellido);
    // this.personaCreada.emit(persona1);
    this.personaService.agregarPersona(persona1);
  }

}
