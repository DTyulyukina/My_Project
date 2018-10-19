import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
     
@Component({ 
  selector: 'settings-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None, 
  template: `<div class="content">
            </div>`
})

export class Settings{
  
}