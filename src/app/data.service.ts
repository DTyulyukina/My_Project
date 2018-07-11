import { Day } from './Date';
 
export class DataService{
    private data: Day[] = [];
    getData(): Day[] {
        return this.data;
    }
    addData(day: Date, weekday: Date, month: Date, year: Date, 
        caption: string, text: string){
        this.data.push(new Day( day, weekday, 
            month, year, caption, text));
    }
}