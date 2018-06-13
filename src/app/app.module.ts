import { NgModule }                         from '@angular/core';
import { CommonModule }                     from '@angular/common';
import { BrowserModule }                    from '@angular/platform-browser';
import { FormsModule }                      from '@angular/forms';
import { CalendarModule }                   from 'angular-calendar';
import { DateToday }                        from './dateToday.component';
import                                      '../scss/base.scss';

@NgModule({
    imports: [  
        BrowserModule, 
        FormsModule,
        CommonModule],
    declarations: [ 
        DateToday],
    bootstrap: [ 
        DateToday]
})

export class AppModule {}