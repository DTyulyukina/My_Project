import { Component } from '@angular/core';
     
@Component({ 
  selector: 'number-day',
  template: `{{today | date: 'dd' }}`
})
export class DateToday{ 
  today = new Date().toLocaleDateString('ru-RU');
}