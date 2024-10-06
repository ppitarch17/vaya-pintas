import { Component } from '@angular/core';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css'
})
export class StatsComponent {
  drinks: { [key: string]: number } = {
    "beers": 4234124,
    "butanos": 3134
  }
  
  ngOnInit() {
    // Increase a random value every 5 seconds
    // setInterval(() => this.increaseRandomValue(), 5000);
  }
  
  // Function to increase a random value by 1
  increaseRandomValue() {
    const keys = Object.keys(this.drinks);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    this.drinks[randomKey] = this.drinks[randomKey]++;
  }


}
