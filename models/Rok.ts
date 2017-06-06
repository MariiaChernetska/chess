import {Piece} from './Piece'
import {Color} from './Piece'
import {Coordinates} from './Coordinates'
import {Board} from './Board'

export class Rok extends Piece {
    constructor(color: Color, coordinates: Coordinates, id:string) {

          if (color == Color.Black) {
                super(coordinates, true, "rok-black", id, color)
            }
            else {
                super(coordinates, true, "rok-white", id, color)
            }
    }
    getPossibleCells(initCoords: Coordinates, figureColor: Color, board: Board): Array<Coordinates>{
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
    checkInBlack(x:number, y:number, board:Board){
        board.blackPieces.forEach((el)=>{
            if(el.x==x && el.y==y){
                return true;
            }
        });
        return false;

    }
    
}