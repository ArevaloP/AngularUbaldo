import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ResultadoComponent } from './resultado/resultado.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ResultadoComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
