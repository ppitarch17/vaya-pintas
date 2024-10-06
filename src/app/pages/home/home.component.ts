import { Component } from '@angular/core';
import { NextEventComponent } from '../../components/next-event/next-event.component';
import { RouterModule } from '@angular/router';
import { StatsComponent } from '../../components/stats/stats.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NextEventComponent,
    StatsComponent,
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
