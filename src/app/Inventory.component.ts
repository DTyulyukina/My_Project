import { Component } from '@angular/core';
 
@Component ({
selector: 'list-menu',
template: `<div class="menu">
           <div class="header-conteiner one">
           </div>
           <div class="header-conteiner two">
           <nav>
              <ul class="list-headers">
                 <li class="header1"><a routerLink="">Ежедневное расписание</a></li>
                 <li class="header1"><a routerLink="/item/stat">Еженедельное расписание</a></li>
                 <li class="header1"><a routerLink="/item/details">Календарь</a></li>
              </ul>
           </nav> 
           </div>
           </div>
           <router-outlet></router-outlet>`
})
 
export class Inventory{
}