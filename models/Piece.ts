import {Coordinates} from './Coordinates'
import {Board} from './Board'
export interface IPiece{
    position: Coordinates;
    onBoard: boolean;
    color: Color;
    id: string;
    className: string;
    getPossibleCells?:(initCoords: Coordinates, figureColor: Color, board: Board)=>Array<Coordinates>
}
export class Piece implements IPiece{
    position: Coordinates;
    onBoard: boolean;
    color: Color;
    id: string;
    className: string;
    constructor(position: Coordinates, onBoard: boolean, className: string, id: string, color:Color) {
        this.onBoard = onBoard;
        this.position = position;
        this.id = id;
        this.className = "piece "+className;
        this.color = color;
    }
    
    leaveBoard() {
        this.onBoard = false;
    }
}
export enum Color {
    Black,
    White
}
