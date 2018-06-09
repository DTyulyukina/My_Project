import { Component, ViewChild  } from '@angular/core';
     
@Component({ 
  selector: 'mounth-day',
  template: `{{today | date: 'MMMM' }}`
})
export class MounthToday{
  today = Date.now();
}