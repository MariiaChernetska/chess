import {Cell} from './models/Cell'
import {Coordinates} from './models/Coordinates'
export class Board{
    cells: any = [];

    constructor() {
        for (let i = 0; i < 8; i++) {
            this.cells[i] = new Array<Cell>();
            for (let j = 0; j < 8; j++) {
                this.cells[i].push(new Cell(true, false, new Coordinates(i, j)));
            }
        }
        console.log(this.cells)
    }
}