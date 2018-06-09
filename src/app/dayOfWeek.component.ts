import { Component }  from '@angular/core';
     
@Component({ 
  selector: 'day-of-week',
  template: `{{dayOfweek | date : 'EEEE' }}`
})

export class DayOfWeek{
  today = Date.now();
}