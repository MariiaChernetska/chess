import {Piece} from './Piece'
import {Color} from './Piece'
import {Coordinates} from './Coordinates'

export class Queen extends Piece {
    constructor(color: Color, coordinates: Coordinates, id:string) {

          if (color == Color.Black) {
                super(coordinates, true, "queen-black", id, color)
            }
            else {
                super(coordinates, true, "queen-white", id, color)
            }
    }
    getPossibleCells(initCoords: Coordinates, figureColor: Color, beat?:Array<Coordinates>): Array<Coordinates>{
        let newCoords: Array<Coordinates> = [];
       
        for(let i=1; i<8; i++){
           
            let buf = new Coordinates(+initCoords.x-i, +initCoords.y-i);
            let buf1 = new Coordinates(+initCoords.x+i, +initCoords.y+i);
            let buf2 = new Coordinates(+initCoords.x-i, +initCoords.y+i);
            let buf3 = new Coordinates(+initCoords.x+i, +initCoords.y-i);
            console.log(buf)
            console.log(buf1)
            console.log(buf2)
            console.log(buf3)
            console.log("block")
            if(buf.x != undefined){
                newCoords.push(buf)
            }
            if(buf1.x != undefined){
                newCoords.push(buf1)
            }
            if(buf2.x != undefined){
                newCoords.push(buf2)
            }
             if(buf3.x != undefined){
                newCoords.push(buf3)
            }

        }
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