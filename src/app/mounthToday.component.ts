import { Component, ViewChild  } from '@angular/core';
import { DateToday } from './dateToday.component';
     
@Component({ 
  selector: 'mounth-day',
  template: `{{today | date: 'MMMM' }}`
})
export class MounthToday{
  @ViewChild(DateToday)
  private counterComponent: DateToday;
}