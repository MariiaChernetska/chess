import {Piece} from './Piece'
import {Color} from './Piece'
import {Coordinates} from './Coordinates'

export class Queen extends Piece {
    constructor(color: Color, coordinates: Coordinates, id:string) {

          if (color == Color.Black) {
                super(coordinates, true, "queen-black", id)
            }
            else {
                super(coordinates, true, "queen-white", id)
            }
    }
}