import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
     
@Component({ 
  selector: 'mwl-demo-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mwl-calendar-day-view
              [viewDate]     = "viewDate"
              [hourSegments] = "5"
              [dayStartHour] = "9"
              [dayEndHour]   = "18">
            </mwl-calendar-day-view>`
})
export class HourseToday{
  view:     string = 'day';
  viewDate: Date   = new Date();
  events:   CalendarEvent[] = [];
}