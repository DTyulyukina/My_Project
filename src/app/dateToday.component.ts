import { Component,  Injectable} from '@angular/core';
     
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
<<<<<<< HEAD
  today: Date = new Date();
=======
  today: Date = new Date;
>>>>>>> 8e4fe31838a55694327d310b1544134d1b301269
  day     = this.today.toLocaleDateString("ru", {day:     'numeric'});
  weekday = this.today.toLocaleDateString("ru", {weekday: 'long'});
  month   = this.today.toLocaleDateString("ru", {month:   'long'});
  year    = this.today.toLocaleDateString("ru", {year:    'numeric'});
<<<<<<< HEAD
}
=======
}

>>>>>>> 8e4fe31838a55694327d310b1544134d1b301269
