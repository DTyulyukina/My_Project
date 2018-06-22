import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CalendarEvent, CalendarMonthViewDay } from 'angular-calendar';
     
@Component({ 
  selector: 'calendar-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div class="content">
              <mwl-calendar-month-view
                [viewDate]="viewDate"
                [events]="events"
                [activeDayIsOpen]="true"
                (beforeViewRender)="beforeMonthViewRender($event)">
               </mwl-calendar-month-view>
             </div>`
})

export class Calendar {
  viewDate: Date = new Date();
  view: string = 'month';

  events: Array<CalendarEvent<{ incrementsBadgeTotal: boolean }>> = [
    {
      title: '',
      start: new Date(),
      meta: {
        incrementsBadgeTotal: true
      }
    },
    {
      title: '',
      start: new Date(),
      meta: {
        incrementsBadgeTotal: false
      }
    }
  ];

  beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): void {
    body.forEach(day => {
      day.badgeTotal = day.events.filter(
        event => event.meta.incrementsBadgeTotal
      ).length;
    });
  }
}