import {Coordinates} from './Coordinates'
export class Piece {
    position: Coordinates;
    onBoard: boolean;
    color: Color;
  
    className: string;
    constructor(position: Coordinates, onBoard: boolean, className: string) {
        this.onBoard = onBoard;
        this.position = position;
        
        this.className = "piece "+className;
    }

    leaveBoard() {
        this.onBoard = false;
    }
}
export enum Color {
    Black,
    White
}
