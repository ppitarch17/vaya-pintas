import { Component } from '@angular/core';

@Component({
  selector: 'app-next-event',
  standalone: true,
  imports: [],
  templateUrl: './next-event.component.html',
  styleUrl: './next-event.component.css'
})
export class NextEventComponent {
  events = [
    {
      name: 'Halloween',
      date: 'October 31',
    }, {
      name: 'Nochevieja',
      date: 'December 31',
    }
  ]
  next!: string;

  ngOnInit() {
    this.saveNextEvent()
  }

  saveNextEvent(): void {
    const currentDate = new Date();
    let nextEvent: { name: string, date: string } | undefined;

    for (const event of this.events) {
      const eventDate = new Date(`${event.date} ${currentDate.getFullYear()}`);
      if (eventDate >= currentDate && (!nextEvent || eventDate < new Date(`${nextEvent.date} ${currentDate.getFullYear()}`))) {
        nextEvent = event;
      }
    }

    if (nextEvent) {
      this.next = nextEvent.name;
    } else {
      this.next = '';
    }
  }
}
