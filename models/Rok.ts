import {Piece} from './Piece'
import {Color} from './Piece'
import {Coordinates} from './Coordinates'

export class Rok extends Piece {
    constructor(color: Color, coordinates: Coordinates, id:string) {

          if (color == Color.Black) {
                super(coordinates, true, "rok-black", id)
            }
            else {
                super(coordinates, true, "rok-white", id)
            }
    }
}