import { PersonaService } from './personas.service';
import { Persona } from './persona.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  titulo = 'Listado de Personas';
  personas: Persona[] = [];

  constructor(private personaService: PersonaService){}

  ngOnInit(): void {
      this.personas = this.personaService.personas;
  }


}
