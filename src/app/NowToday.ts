import { Injectable } from '@angular/core';

@Injectable()
export class NowToday{ 
    today: Date;
    constructor(today: Date) {this.today = new Date();} 
}

