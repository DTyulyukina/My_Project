import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CalendarEvent, 
  DAYS_OF_WEEK} from 'angular-calendar';
//import { CustomDateFormatter } from './custom-date-formatter.provider';
     
@Component({ 
  selector: 'calendar-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div class="content">
              <mwl-calendar-month-view
               [viewDate]="viewDate"
               [events]="events"
               [locale]="locale"
               [weekStartsOn]="weekStartsOn"
               [weekendDays]="weekendDays">
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
  //locale: string = 'ru';
  weekStartsOn: number = DAYS_OF_WEEK.MONDAY;
  weekendDays: number[] = [DAYS_OF_WEEK.FRIDAY, DAYS_OF_WEEK.SATURDAY];
}