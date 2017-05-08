import {Piece} from './Piece'
import {Color} from './Piece'
import {Coordinates} from './Coordinates'

export class Pawn extends Piece {
    madeFirstMove: boolean;
    id: string;
    constructor(color: Color, coordinates: Coordinates, id: string) {
       
          if (color == Color.Black) {
                super(coordinates, true, "pawn-black")
            }
            else {
                super(coordinates, true, "pawn-white")
            }
            this.madeFirstMove = false;
        this.id = id;
    }
    getPossibleCells(initCoords: Coordinates, figureColor: Color, beat?:Array<Coordinates>): Array<Coordinates>{
        let newCoords: Array<Coordinates> = [];
        if(figureColor == Color.Black){
            if(this.madeFirstMove){
            newCoords.push(new Coordinates(initCoords.x, initCoords.y-1))
        }
        else{
            let c1 = new Coordinates(initCoords.x, initCoords.y-1);
            let c2 = new Coordinates(initCoords.x, initCoords.y-2)
            newCoords.push(c1, c2);
           
        }
        if(beat){
            beat.forEach(element => {
                newCoords.push(new Coordinates(element.x, element.y));
            });
        }
        
    }
     else{
        if(this.madeFirstMove){
            newCoords.push(new Coordinates( +initCoords.x,  +initCoords.y+1))
        }
        else{
            let c1 = new Coordinates( +initCoords.x, +initCoords.y+1);
            let c2 = new Coordinates( +initCoords.x,  +initCoords.y+2)
            newCoords.push(c1, c2);
           
        }
        if(beat){
            beat.forEach(element => {
                newCoords.push(new Coordinates(element.x, element.y));
            });
        }
        
        }
        
        return newCoords;
        
    }
}