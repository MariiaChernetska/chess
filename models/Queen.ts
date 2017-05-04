import {Piece} from './Piece'
import {Color} from './Piece'
import {Coordinates} from './Coordinates'

export class Queen extends Piece {
    constructor(color: Color, coordinates: Coordinates) {

          if (color == Color.Black) {
                super(coordinates, true, "queen-black")
            }
            else {
                super(coordinates, true, "queen-white")
            }
    }
}