import { Component,  Injectable} from '@angular/core';
import { NowToday} from './NowToday';
     
@Component({ 
<<<<<<< HEAD
  selector: 'number-day',
  template: `{{ day | date: 'dd' }}`
=======
  selector: 'day',
  template: `<div id="number-day"> {{ day }} </div>
             <div id="attr-day">
               <div id="day-of-week"> {{ weekday }} </div>
               <div id="mounth-day">  {{ month }} </div>
               <div id="year-day">    {{ year }} </div>
             </div>`
>>>>>>> a1a4dd57eef9f47ad31903e42d8d1b547a8fe384
})

@Injectable()
export class DateToday{ 
<<<<<<< HEAD
  day: Date;
  constructor(private _date: NowToday) {
      this.day = this._date.today;
  }
}

=======
  day     = new Date().toLocaleDateString("ru", {day:     'numeric'});
  weekday = new Date().toLocaleDateString("ru", {weekday: 'long'});
  month   = new Date().toLocaleDateString("ru", {month:   'long'});
  year    = new Date().toLocaleDateString("ru", {year:    'numeric'});
}
>>>>>>> a1a4dd57eef9f47ad31903e42d8d1b547a8fe384
