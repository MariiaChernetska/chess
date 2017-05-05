import {Piece} from './Piece'
import {Color} from './Piece'
import {Coordinates} from './Coordinates'

export class King extends Piece {
    constructor(color: Color, coordinates: Coordinates) {

          if (color == Color.Black) {
                super(coordinates, true, "king-black")
            }
            else {
                super(coordinates, true, "king-white")
            }
    }
    getPossibleCells(initCoords: Coordinates): Array<Coordinates>{
        let top = new Coordinates(initCoords.x, initCoords.y+1);
        let back = new Coordinates(initCoords.x, initCoords.y-1);
        let left = new Coordinates(initCoords.x-1, initCoords.y);
        let right = new Coordinates(initCoords.x+1, initCoords.y);
        let topLeft = new Coordinates(initCoords.x-1, initCoords.y+1);
        let topRight = new Coordinates(initCoords.x+1, initCoords.y+1);
        let backLeft = new Coordinates(initCoords.x-1, initCoords.y-1);
        let backRight = new Coordinates(initCoords.x+1, initCoords.y-1);
        let newCoords = [top, back, left,right, topLeft, topRight, backLeft, backRight];
        return newCoords;
        
    }
}