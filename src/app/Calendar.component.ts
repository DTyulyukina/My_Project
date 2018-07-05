import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CalendarEvent} from 'angular-calendar';
//import { CustomDateFormatter } from './custom-date-formatter.provider';
     
@Component({ 
  selector: 'calendar-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div class="content">
              <mwl-calendar-month-view
              [viewDate]="viewDate">
              </mwl-calendar-month-view>
             </div>`
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
  locale: string = 'Ru';
}