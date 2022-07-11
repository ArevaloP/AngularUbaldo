import { Component } from "@angular/core";

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent{
  deshabilitar = false;
  mensaje = 'No se ha agregado ninguna persona';
  titulo = 'Licenciado';
  mostrar = false;

  agregarPersona():void{
    this.mensaje = 'Persona agregada';
    this.mostrar = true;
  }

  // modificarTitulo(event: Event){
  //   console.log('Entrando a metodo modificarTitulo');
  //   this.titulo = (<HTMLInputElement>event.target).value;
  // }
}
