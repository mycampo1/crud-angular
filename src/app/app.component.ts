import { Component } from '@angular/core';

import { PersonaComponent } from 'src/persona/persona.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  personaArray: PersonaComponent[] = [
    { id: 1, nombre: 'Ancheloty', apellido: 'casemiro', pais: 'españa' },
    { id: 2, nombre: 'modrick', apellido: 'perez', pais: 'colombia' },
    { id: 3, nombre: 'messi', apellido: 'cr7', pais: 'brasil' },
  ];

  cpPersona: PersonaComponent = new PersonaComponent();

  eliminar() {
    if (confirm('Seguro que quieres eliminarlo')) {
      this.personaArray = this.personaArray.filter((x) => x != this.cpPersona);
      this.cpPersona = new PersonaComponent();
    }else{
      alert("gracias por tu eleccion")
    }

    
  }

  abrirEditar(personaA: PersonaComponent) {
    this.cpPersona = personaA;
  }

  aggEditar() {
    if (this.cpPersona.id === 0) {
      this.cpPersona.id = this.personaArray.length + 1;
      this.personaArray.push(this.cpPersona);
    }
    this.cpPersona = new PersonaComponent();
  }
}
