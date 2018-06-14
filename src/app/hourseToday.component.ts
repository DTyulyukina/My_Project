import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
     
@Component({ 
  selector: 'mwl-demo-component',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HourseToday{
  view: string = 'day';
  viewDate: Date = new Date();
  events: CalendarEvent[] = [];
}