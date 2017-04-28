import {Piece} from './Piece'
import {Color} from './Piece'
import {Coordinates} from './Coordinates'

export class King extends Piece {
    constructor(color: Color, gameColor: Color) {
        if(gameColor == Color.Black){
              if (color == Color.Black) {
                super(new Coordinates(4, 7), true, "king-black", gameColor)
            }
            else {
                super(new Coordinates(4, 0), true, "king-white", gameColor)
            }
        
        }
        else{
              if (color == Color.Black) {
                super(new Coordinates(4, 0), true, "king-black", gameColor)
            }
            else {
                super(new Coordinates(4, 7), true, "king-white", gameColor)
            }
        
        }
      
        
    }
}