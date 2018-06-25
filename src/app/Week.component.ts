import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
     
@Component({ 
  selector: 'week-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div class="content">
                <mwl-calendar-week-view
                  [viewDate]="viewDate"
                  [events]="events">
                </mwl-calendar-week-view>
             </div>`
})

export class Week {
  viewDate: Date = new Date();
}