import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule,
    FormsModule,
    NgClass
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMenuOpen = false;

  isCollapsed : boolean = true;
  menuItems =  [{
    label: 'Vaya Pintas!',
    icon: 'fa-solid fa-champagne-glasses',
    route: "/"
  },
  {
    label: 'La colla',
    icon: 'fa-solid fa-house',
    route: "/la-colla"
  },
  {
    label: 'La gente',
    icon: 'fa-solid fa-user',
    route: "/la-gente"
  },
  {
    label: 'Magddalena',
    icon: 'fa-regular fa-star',
    route: "/magdalena"
  }
]

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    const menu = document.getElementById('menu') as HTMLElement;
    menu.classList.toggle('hidden');

    
  }
}
