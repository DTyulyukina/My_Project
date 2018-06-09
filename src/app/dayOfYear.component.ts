import { Component} from '@angular/core';
     
@Component({ 
  selector: 'year-day',
  template: `{{today | date: 'yyyy' }}`
})
export class DayOfYear{ 
  today = Date.now();
}