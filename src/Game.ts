import {Cell} from '../models/Cell'
import {Coordinates} from '../models/Coordinates'
import {King} from '../models/King'
import {Queen} from '../models/Queen'
import {Pawn} from '../models/Pawn'
import {Bishop} from '../models/Bishop'
import {Knight} from '../models/Knight'
import {Rok} from '../models/Rok'
import {Color} from '../models/Piece'
import {Piece} from '../models/Piece'
import {DragnDrop} from './dragdrop'
import {Board} from '../models/Board'
export class Game{
    board: Board = new Board();
    drag: DragnDrop = new DragnDrop(this.getElement);
    constructor(){
        console.log(this.board.blackPieces.King.getPossibleCells(this.board.blackPieces.King.position))
        
    }
    getElement(elem:any){
        console.log(elem)
    }
}