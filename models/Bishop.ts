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
        return newCoords;
    }
}