import {Piece} from './Piece'
import {Color} from './Piece'
import {Coordinates} from './Coordinates'

export class Bishop extends Piece {
    constructor(color: Color, coordinates: Coordinates, id: string) {

          if (color == Color.Black) {
                super(coordinates, true, "bishop-black", id, color)
            }
            else {
                super(coordinates, true, "bishop-white", id, color)
            }
    }
}