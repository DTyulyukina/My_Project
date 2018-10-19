import { NgModule }                         from '@angular/core';
import { CommonModule }                     from '@angular/common';
import { BrowserModule }                    from '@angular/platform-browser';
import { Routes, RouterModule }             from '@angular/router';
import { CalendarModule }                   from 'angular-calendar';
import { HourseToday }                      from './hourseToday.component';
import { Calendar }                         from './Calendar.component';
import { Week }                             from './Week.component';
import { Settings }                         from './Settings.component';
import { Inventory }                        from './Inventory.component';
import                                      '../scss/base.scss';

const appRoutes: Routes = [
    { path: 'day-component',      component: HourseToday},
    { path: 'week-component',     component: Week},
    { path: 'calendar-component', component: Calendar},
    { path: 'settings-component', component: Settings }
];

@NgModule({
    imports: [ 
        BrowserModule, 
        CommonModule,
        CalendarModule.forRoot(),
        RouterModule.forRoot(appRoutes)],
    declarations: [ 
        Inventory, HourseToday, Calendar, Week, Settings],
    bootstrap: [ 
        Inventory ]
})

export class AppModule {}