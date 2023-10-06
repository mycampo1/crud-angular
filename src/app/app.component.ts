import { Component } from '@angular/core';

import { PersonaComponent } from 'src/persona/persona.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  personaArray: PersonaComponent[] = [
    { id: 1, nombre: 'Cristiano', apellido: 'Ronaldo', pais: 'Portugal' },
    { id: 2, nombre: 'Leonel', apellido: 'Messi', pais: 'Argentina' },
    { id: 3, nombre: 'Andres', apellido: 'Iniesta', pais: 'España' },
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

  champion: string ="assets/img/ch.png";

}
