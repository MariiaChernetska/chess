import {Piece} from './Piece'
import {Color} from './Piece'
import {Coordinates} from './Coordinates'

export class King extends Piece {
    constructor(color: Color, coordinates: Coordinates, id:string) {

          if (color == Color.Black) {
                super(coordinates, true, "king-black", id)
            }
            else {
                super(coordinates, true, "king-white", id)
            }
    }
    getPossibleCells(initCoords: Coordinates): Array<Coordinates>{
        let newCoords = [];
        for(let i = -1; i<2; i++){
            for(let j = -1; j<2; j++){
               if(i==0 && j==0) {continue;}
               let coords = new Coordinates(initCoords.x+i, initCoords.y+j);
               if(coords.x)
               {
                    newCoords.push(coords);
               }
               
            }
        }
        return newCoords;
        
    }
}