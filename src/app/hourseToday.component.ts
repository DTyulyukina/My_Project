import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { ActivatedRoute} from '@angular/router';
     
@Component({ 
  selector: 'day-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div class="content">
  <div class="days">
  <div class="day">
  <div id="number-day"> {{ day }} </div>
    <div id="attr-day">
      <div id="day-of-week"> {{ weekday }} </div>
      <div id="mounth-day">  {{ month }} </div>
      <div id="year-day">    {{ year }} </div>
    </div></div>
  <div class="hours">
    <mwl-calendar-day-view
    [viewDate]     = "viewDate"
    [hourSegments] = "5"
    [dayStartHour] = "9"
    [dayEndHour]   = "18">
  </mwl-calendar-day-view>
  </div></div></div>`
})
export class HourseToday{
  //view:     string = 'day';
  viewDate: Date   = new Date();
  //events:   CalendarEvent[] = [];

  day     = this.viewDate.toLocaleDateString("ru", {day:     'numeric'});
  weekday = this.viewDate.toLocaleDateString("ru", {weekday: 'long'});
  month   = this.viewDate.toLocaleDateString("ru", {month:   'long'});
  year    = this.viewDate.toLocaleDateString("ru", {year:    'numeric'});
}