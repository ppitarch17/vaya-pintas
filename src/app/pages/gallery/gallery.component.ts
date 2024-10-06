import { Component } from '@angular/core';
import { personas } from '../la-gente/personas';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  pics = personas.sort(() => Math.random() - 0.5);

}
