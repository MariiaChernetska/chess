import {Cell} from '../models/Cell'
import {Coordinates} from '../models/Coordinates'
import {Pawn} from '../models/Pawn'
import {Color} from '../models/Piece'
import {IPiece} from '../models/Piece'
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
        let buf = [];
        let obj = {};
        id.charAt(0)=="b"?buf = this.board.blackPieces:buf = this.board.whitePieces;
       
       for(let i=0;i<buf.length; i++){
                if(buf[i].id == id) {
                    obj = buf[i]; 
                    break;
                }   
           }
       if(startMove){
            this.pieceAction(<IPiece>obj);
       }
       return obj;
    }
    finishMove(elem:any, coords: {x:number, y: number}){
        let obj:IPiece = Game.self.resolveElement(elem.id, false);
        obj.position = new Coordinates(coords.x, coords.y); 
        if(obj instanceof Pawn) obj.makeFirstMove();
        let cells = document.getElementsByClassName("cell");
        for(let i=0; i<cells.length; i++){
            cells[i].classList.remove("possibleCell", "droppable");
            
        }
    }
    pieceAction(piece: IPiece){
        let possibleMoves = [];
        possibleMoves = piece.getPossibleCells(piece.position, piece.color, this.board);
        possibleMoves.forEach((element, i, arr)=>{
            let cell = document.getElementById(element.y.toString()+element.x.toString());
        })
        this.hightlightCells(possibleMoves);
    }
    
    hightlightCells(cellCoords: Array<Coordinates>){
        cellCoords.forEach(element=>{
            if(element!=null){
                let buf = element.y.toString()+element.x.toString();
                let cell = document.getElementById(buf);
                cell.classList.add("possibleCell", "droppable");
            }
           
        })
    }
    
}