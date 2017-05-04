import {Piece} from './Piece'
import {Color} from './Piece'
import {Coordinates} from './Coordinates'

export class Bishop extends Piece {
    constructor(color: Color, coordinates: Coordinates) {

          if (color == Color.Black) {
                super(coordinates, true, "bishop-black")
            }
            else {
                super(coordinates, true, "bishop-white")
            }
    }
}