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
        DateToday,
        HourseToday]
})

export class AppModule {}