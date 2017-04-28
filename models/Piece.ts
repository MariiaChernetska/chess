import {Coordinates} from './Coordinates'
export class Piece {
    position: Coordinates;
    onBoard: boolean;
    color: Color;
    gameColor: Color;
    className: string;
    constructor(position: Coordinates, onBoard: boolean, className: string, gameColor: Color) {
        this.onBoard = onBoard;
        this.position = position;
        this.gameColor = gameColor;
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
