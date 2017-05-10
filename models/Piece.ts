import {Coordinates} from './Coordinates'
export class Piece {
    position: Coordinates;
    onBoard: boolean;
    color: Color;
    id: string;
    className: string;
    constructor(position: Coordinates, onBoard: boolean, className: string, id: string) {
        this.onBoard = onBoard;
        this.position = position;
        this.id = id;
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
