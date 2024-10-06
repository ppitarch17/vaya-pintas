import { Component } from '@angular/core';
import { personas } from './personas';
import { invitados } from './invitados';

@Component({
  selector: 'app-la-gente',
  standalone: true,
  imports: [],
  templateUrl: './la-gente.component.html',
  styleUrl: './la-gente.component.css'
})
export class LaGenteComponent {
  personas = personas.sort(() => Math.random() - 0.5);    
  colaboradores = invitados;
}
