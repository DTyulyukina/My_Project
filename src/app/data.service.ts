import { Day } from './Date';
 
export class DataService{
    private data: Day[] = [];
    getData(): Day[] {
        return this.data;
    }
    addData(day: Date, weekday: Date){
        this.data.push(new Day( day));
    }
}