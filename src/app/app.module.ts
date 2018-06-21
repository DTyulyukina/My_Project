import { NgModule }                         from '@angular/core';
import { CommonModule }                     from '@angular/common';
import { BrowserModule }                    from '@angular/platform-browser';
import {Routes, RouterModule}               from '@angular/router';
import { CalendarModule }                   from 'angular-calendar';
import { HourseToday }                      from './hourseToday.component';
import { Calendar }                         from './Calendar.component';
import { Inventory }                        from './Inventory.component';
import                                      '../scss/base.scss';

// определение дочерних маршрутов
const itemRoutes: Routes = [
    { path: 'calendar-component', component: Calendar},
    { path: 'day-component', component: HourseToday}
];
 
const appRoutes: Routes =[
    { path: 'item/', component: Inventory},
    { path: 'item/', component: Inventory, children: itemRoutes}
];

@NgModule({
    imports: [ 
        BrowserModule, 
        CommonModule,
        CalendarModule.forRoot(),
        RouterModule.forRoot(appRoutes)],
    declarations: [ 
        HourseToday, Calendar, Inventory ],
    bootstrap: [ 
        Inventory ]
})

export class AppModule {}