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
    getPossibleCells(initCoords: Coordinates, figureColor: Color, beat?:Array<Coordinates>): Array<Coordinates>{
        let newCoords: Array<Coordinates> = [];
        let moves = [+1, +2,  +2, +1,  +2, -1,  +1, -2,  -1, -2,  -1, -2, -2, -1, -2, +1, -1, +2]
        for(let i = 0; i<moves.length; i+=2){
            let buf1 = moves[i];
            let buf2 = moves[i+1];
            let c = new Coordinates(+initCoords.x+buf1, +initCoords.y+buf2);
            if (c.x != undefined){
                newCoords.push(c);
            }
        }
       /* newCoords.push(new Coordinates(+initCoords.x+1, +initCoords.y+2));
        newCoords.push(new Coordinates(+initCoords.x+2, +initCoords.y+1));
        newCoords.push(new Coordinates(+initCoords.x+2, +initCoords.y-1));

        newCoords.push(new Coordinates(+initCoords.x+1, +initCoords.y-2));
        newCoords.push(new Coordinates(+initCoords.x-1, +initCoords.y-2));
        newCoords.push(new Coordinates(+initCoords.x-2, +initCoords.y-1));
    
        newCoords.push(new Coordinates(+initCoords.x-2, +initCoords.y+1));
        newCoords.push(new Coordinates(+initCoords.x-1, +initCoords.y+2));*/
        console.log(newCoords)
        return newCoords;
    }
}