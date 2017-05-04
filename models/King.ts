﻿import {Piece} from './Piece'
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
}