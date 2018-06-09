import { Component,  Injectable} from '@angular/core';
import { NowToday} from './NowToday';
     
@Component({ 
  selector: 'number-day',
  template: `{{ day | date: 'dd' }}`
})

@Injectable()
export class DateToday{ 
  day: Date;
  constructor(private _date: NowToday) {
      this.day = this._date.today;
  }
}

