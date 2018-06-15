import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
     
@Component({ 
  selector: 'mwl-calendar-component',

})
export class Calendar {
  view:     string = 'day';
  viewDate: Date   = new Date();
  events:   CalendarEvent[] = [];
}