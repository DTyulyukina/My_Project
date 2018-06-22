import { NgModule }                         from '@angular/core';
import { CommonModule }                     from '@angular/common';
import { BrowserModule }                    from '@angular/platform-browser';
import {Routes, RouterModule}               from '@angular/router';
import { CalendarModule }                   from 'angular-calendar';
import { HourseToday }                      from './hourseToday.component';
import { Calendar }                         from './Calendar.component';
import { Inventory }                        from './Inventory.component';
import                                      '../scss/base.scss';

const itemRoutes: Routes = [
    { path: 'day-component',      component: HourseToday},
    { path: 'calendar-component', component: Calendar}
];
 
const appRoutes: Routes =[
    { path: 'item/', component: Inventory},
    { path: 'item/', component: Inventory, children: itemRoutes},
    { path: '', component: Calendar}
];

@NgModule({
    imports: [ 
        BrowserModule, 
        CommonModule,
        CalendarModule.forRoot(),
        RouterModule.forRoot(appRoutes)],
    declarations: [ 
        Inventory, HourseToday, Calendar],
    bootstrap: [ 
        Inventory, Calendar ]
})

export class AppModule {}