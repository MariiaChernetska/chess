import {Piece} from './Piece'
import {Color} from './Piece'
import {Coordinates} from './Coordinates'

export class Pawn extends Piece {
    constructor(color: Color, coordinates: Coordinates) {

          if (color == Color.Black) {
                super(coordinates, true, "pawn-black")
            }
            else {
                super(coordinates, true, "pawn-white")
            }
    }
}