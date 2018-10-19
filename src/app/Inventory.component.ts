import { Component } from '@angular/core';
 
@Component ({
selector: 'list',
template: `<div class="header">
            <div class="header-conteiner first">DateBook</div>
           </div>
           <div class="menu">
              <div class="header-conteiner one"></div>
              <div class="header-conteiner two">
                 <ul class="list-headers">
                   <li class="header1"><a routerLink="/day-component">Daily Timetable</a></li>
                   <li class="header1"><a routerLink="/week-component">Weekly Timetable</a></li>
                   <li class="header1"><a routerLink="/calendar-component">Calendar</a></li>
                   <li class="header1"><a routerLink="/settings-component"><img [src]="'images/setting.png'" alt=""></a></li>
                 </ul>
              </div>
           </div>
           <router-outlet></router-outlet>`
})
 
export class Inventory{
}