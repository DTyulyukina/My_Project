import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
     
@Component({ 
  selector: 'settings-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None, 
  template: `<div class="content">
            <p>Цветовое оформление</p>
            <input type="radio" checked="checked" />Дизайн 1
            <input type="radio" checked="checked" />Дизайн 2
            <input type="radio" checked="checked" />Дизайн 3
            <p>Тектовное оформление</p>
            <ul>
            <li>Стиль</li>
            <li>Размер</li>
            <li>Форматирование</li>
            </ul>
            </div>`
})

export class Settings{
  
}