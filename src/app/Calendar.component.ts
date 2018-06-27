import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CalendarEvent, CalendarMonthViewDay } from 'angular-calendar';
     
@Component({ 
  selector: 'calendar-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div class="content">
                <mwl-calendar-month-view
                  [viewDate]="viewDate"
                  [activeDayIsOpen]="true"
                  (beforeViewRender)="beforeMonthViewRender($event)">
                </mwl-calendar-month-view>
             </div>`
})

export class Calendar {
  viewDate: Date = new Date();
  events: Array<CalendarEvent<{ incrementsBadgeTotal: boolean }>> = [
    {
      title: '',
      start: new Date(),
      meta: { incrementsBadgeTotal: true}
    }
  ];
}