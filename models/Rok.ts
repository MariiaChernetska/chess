import {Piece} from './Piece'
import {Color} from './Piece'
import {Coordinates} from './Coordinates'

export class Rok extends Piece {
    constructor(color: Color, coordinates: Coordinates, id:string) {

          if (color == Color.Black) {
                super(coordinates, true, "rok-black", id, color)
            }
            else {
                super(coordinates, true, "rok-white", id, color)
            }
    }
    getPossibleCells(initCoords: Coordinates, figureColor: Color, beat?:Array<Coordinates>): Array<Coordinates>{
        let newCoords: Array<Coordinates> = [];
        
            for(let i=0; i<8; i++){
                if(initCoords.y==i) continue;
                newCoords.push(new Coordinates(initCoords.x,i));
            }
            for (let i=0; i<8; i++){
                if(initCoords.x==i) continue;
                newCoords.push(new Coordinates(i, initCoords.y));
            }
            
        
        
        return newCoords;
    }
}