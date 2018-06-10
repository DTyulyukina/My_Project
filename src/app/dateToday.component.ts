import { Component } from '@angular/core';
     
@Component({ 
  selector: 'day',
  template: `<div id="number-day"> {{ day }} </div>
             <div id="attr-day">
               <div id="day-of-week"> {{ weekday }} </div>
               <div id="mounth-day">  {{ month }} </div>
               <div id="year-day">    {{ year }} </div>
             </div>`
})
export class DateToday{ 
  day     = new Date().toLocaleDateString("ru", {day:     'numeric'});
  weekday = new Date().toLocaleDateString("ru", {weekday: 'long'});
  month   = new Date().toLocaleDateString("ru", {month:   'long'});
  year    = new Date().toLocaleDateString("ru", {year:    'numeric'});
}