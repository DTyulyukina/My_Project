import { NgModule }        from '@angular/core';
import { BrowserModule }   from '@angular/platform-browser';
import { FormsModule }     from '@angular/forms';
import { DateToday }       from './dateToday.component';
import { Mounth }          from './Mounth.component';
import                     '../scss/base.scss';

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ DateToday, Mounth ],
    bootstrap:    [ DateToday, Mounth ],
})

export class AppModule {}