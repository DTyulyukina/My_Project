import { NgModule }        from '@angular/core';
import { BrowserModule }   from '@angular/platform-browser';
import { FormsModule }     from '@angular/forms';
import { DateToday }       from './dateToday.component';
import { MounthToday }     from './mounthToday.component';
import { DayOfWeek }       from './dayOfWeek.component';
import { DayOfYear }       from './dayOfYear.component';
import                     '../scss/base.scss';

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ DateToday, MounthToday, DayOfWeek, DayOfYear ],
    bootstrap:    [ DateToday, MounthToday, DayOfWeek, DayOfYear],
})

export class AppModule {}