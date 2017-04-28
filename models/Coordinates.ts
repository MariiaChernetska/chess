export class Coordinates {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        if (x >= 0 && x < 8 && y >= 0 && y < 8) {
            this.x = x;
            this.y = y;
        }
        
    }
}