import { Component } from '@angular/core';
 
@Component ({
selector: 'list',
template: `<div class="header">
            <div class="header-conteiner first">Ежедневник</div>
           </div>
           <div class="menu">
              <div class="header-conteiner one"></div>
              <div class="header-conteiner two">
                 <ul class="list-headers">
                   <li class="header1"><a routerLink="/day-component">Ежедневное расписание</a></li>
                   <li class="header1"><a routerLink="/week-component">Еженедельное расписание</a></li>
                   <li class="header1"><a routerLink="/calendar-component">Календарь</a></li>
                 </ul>
              </div>
           </div>
           <router-outlet></router-outlet>`
})
 
export class Inventory{
}