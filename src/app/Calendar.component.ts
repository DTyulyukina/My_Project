import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
     
@Component({ 
  selector: 'mwl-calendar-component',
  template: `<mwl-calendar
  [view] = "calendarView"
  [view-date] = "viewDate"
  [events] = "events"
  [view-title] = "calendarTitle"
  [on-event-click] = "eventClicked(calendarEvent)"
  [on-event-times-changed] = "calendarEvent.startsAt = calendarNewEventStart; calendarEvent.endsAt = calendarNewEventEnd"
  [cell-is-open] = "true">
</mwl-calendar>`
})

export class Calendar {
}