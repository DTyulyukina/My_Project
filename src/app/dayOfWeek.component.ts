import { Component, ContentChild}  from '@angular/core';
import { DateToday}             from './dateToday.component';
     
@Component({ 
  selector: 'day-of-week',
  template: `{{dayOfweek | date : 'EEEE' }}`
})
export class DayOfWeek{
  @ContentChild(DateToday) private dateToday:DateToday;
  dayOfweek = this.dateToday.today.toLocaleDateString('ru-RU');
  constructor() {
    console.log(`new - jokeViewChild is ${this.dateToday.today}`);
  }
}