import { Component, ViewChild}  from '@angular/core';
import { DateToday}             from './dateToday.component';
     
@Component({ 
  selector: 'day-of-week',
  template: `{{dayOfweek | date : 'EEEE' }}`
})

export class DayOfWeek{
  @ViewChild(DateToday) private dateToday: DateToday;
  dayOfweek = this.dateToday;
  constructor() {
    console.log(`Day of week is ${this.dayOfweek}`);
  }
}