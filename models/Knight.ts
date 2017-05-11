import {Piece} from './Piece'
import {Color} from './Piece'
import {Coordinates} from './Coordinates'

export class Knight extends Piece {
    constructor(color: Color, coordinates: Coordinates, id:string) {

          if (color == Color.Black) {
                super(coordinates, true, "knight-black", id, color)
            }
            else {
                super(coordinates, true, "knight-white", id, color)
            }
    }
}