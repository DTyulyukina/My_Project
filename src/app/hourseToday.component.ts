import { Component, ChangeDetectionStrategy} from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { ActivatedRoute} from '@angular/router';
import { BoldDirective} from './bold.directive';
import {DataService} from './data.service';
import { Day } from './Date';
     
@Component({ 
  selector: 'day-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div class="content">
  <div class="days">
    <div class="day">
      <div id="number-day"> {{ viewDate | date: 'd' }} </div>
      <div id="attr-day">
        <div id="day-of-week"> {{ viewDate | date: 'EEEE' }} </div>
        <div id="mounth-day">  {{ viewDate | date: 'MMMM' }} </div>
        <div id="year-day">    {{ viewDate | date: 'yyyy' }} </div>
      </div>
    </div>
    <div class="hours">
    <mwl-calendar-day-view
      [viewDate]     = "viewDate"
      [hourSegments] = "5"
      [dayStartHour] = "9"
      [dayEndHour]   = "18"
      (click)="addNotes()">
    </mwl-calendar-day-view>
    </div>
  </div></div>`,
  providers:   [DataService]
})

export class HourseToday{
  viewDate: Date   = new Date();
}