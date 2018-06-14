import { NgModule }        from '@angular/core';
import { BrowserModule }   from '@angular/platform-browser';
import { FormsModule }     from '@angular/forms';
import { DateToday }       from './dateToday.component';
import { HoursDay }        from './HoursDay.component';
import                     '../scss/base.scss';

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ DateToday, HoursDay ],
    bootstrap:    [ DateToday, HoursDay ],
})

export class AppModule {}