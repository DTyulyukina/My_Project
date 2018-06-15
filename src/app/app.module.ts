<<<<<<< HEAD
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
=======
import { NgModule }                         from '@angular/core';
import { CommonModule }                     from '@angular/common';
import { BrowserModule }                    from '@angular/platform-browser';
import { FormsModule }                      from '@angular/forms';
import { CalendarModule }                   from 'angular-calendar';
import { DateToday }                        from './dateToday.component';
import { HourseToday }                      from './hourseToday.component';
import                                      '../scss/base.scss';

@NgModule({
    imports: [ 
        BrowserModule, 
        FormsModule,
        CommonModule,
        CalendarModule.forRoot()],
    declarations: [ 
        DateToday,
        HourseToday ],
    bootstrap: [ 
<<<<<<< HEAD
        DateToday,
        HourseToday]
=======
        DateToday]
>>>>>>> 8e4fe31838a55694327d310b1544134d1b301269
>>>>>>> ab2f2dee8b51cc17d91b09e445596927f5c849eb
})

export class AppModule {}