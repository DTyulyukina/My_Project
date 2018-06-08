import { Component, ViewChild  } from '@angular/core';
import { DateToday } from './dateToday.component';
     
@Component({ 
  selector: 'year-day',
  template: `{{today | date: 'yyyy' }}`
})
export class DayOfYear{ 
  @ViewChild(DateToday)
  private counterComponent: DateToday;
}