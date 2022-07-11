import { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from './LoggingService.service';
import { Persona } from './persona.model';

@Injectable()
export class PersonaService {
  personas: Persona[] = [
    new Persona('Georffrey', 'Arevalo'),
    new Persona('Elian', 'Arevalo'),
    new Persona('Mayde', 'Prado'),
  ];

  saludar = new EventEmitter<number>();

  constructor(private loggingService: LoggingService){}

  agregarPersona(persona: Persona) {
    this.loggingService.enviarMensajeAConsola('Agregamos la persona: ' + persona.nombre + ' ' + persona.apellido);
    this.personas.push(persona);
  }
}
