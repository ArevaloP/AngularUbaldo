import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { PersonasComponent } from './personas/personas.component';
import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    PersonaComponent
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
