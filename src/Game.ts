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
    drag: DragnDrop = new DragnDrop(this.getElement, this.finishMove);
    static self: any;
    figure: any;
    constructor(){
        //console.log(this.board.blackPieces.King.getPossibleCells(this.board.blackPieces.King.position))
       Game.self = this;
       this.getElement = this.getElement.bind(this);
    }
    getElement(elem:any){
        Game.self.resolveElement(elem.id, true);
    }
    resolveElement(id:any, startMove: boolean){

        let obj = {};
       if(id.charAt(0)=="b"){
           let buf = this.board.blackPieces;
           for(let i=0;i<buf.length; i++){
                if(buf[i].id == id) {
                    obj = buf[i]; 
                    break;
                }
           }
       }
       if(startMove){
            if(obj instanceof Pawn) this.pawnAction(<Pawn>obj)
       }
       return obj;
    }
    finishMove(elem:any, coords: {x:number, y: number}){
        let obj = Game.self.resolveElement(elem.id, false);
        obj.position = new Coordinates(coords.x, coords.y); 
        if(obj instanceof Pawn) obj.makeFirstMove();
        let cells = document.getElementsByClassName("cell");
        for(let i=0; i<cells.length;i++){
            cells[i].className = cells[i].className.replace(" possibleCell droppable", "");
        }
    }
    pawnAction(pawn:Pawn){
        let possibleMoves = [];
        possibleMoves = pawn.getPossibleCells(pawn.position, pawn.color);
        this.hightlightCells(possibleMoves);
    }
    hightlightCells(cellCoords: Array<Coordinates>){
        cellCoords.forEach(element=>{
            let buf = element.y.toString()+element.x.toString();
           let cell = document.getElementById(buf);
           cell.className += " possibleCell droppable";
        })
    }
    
}