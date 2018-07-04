import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CalendarEvent, CalendarMonthViewDay } from 'angular-calendar';
import { Day } from './Date';
     
@Component({ 
  selector: 'calendar-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mwl-calendar-month-view
              [viewDate]="viewDate">
            </mwl-calendar-month-view>`
})

export class Calendar {
  viewDate: Date = new Date();
  events: Array<CalendarEvent<{ incrementsBadgeTotal: boolean }>> = [
    {
      title: '',
      start: new Date(),
      meta: { incrementsBadgeTotal: true }
    }
  ];
}