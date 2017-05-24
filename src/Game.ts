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
            if(obj instanceof Pawn) this.pawnAction(<Pawn>obj)
            if(obj instanceof Rok) this.rokAction(<Rok>obj)
            if(obj instanceof Knight) this.knightAction(<Knight>obj)
            if(obj instanceof Bishop) this.bishopAction(<Bishop>obj)
            if(obj instanceof Queen) this.queenAction(<Queen>obj)
            if(obj instanceof King) this.kingAction(<King>obj)
       }
       return obj;
    }
    finishMove(elem:any, coords: {x:number, y: number}){
        let obj = Game.self.resolveElement(elem.id, false);
        obj.position = new Coordinates(coords.x, coords.y); 
        if(obj instanceof Pawn) obj.makeFirstMove();
        let cells = document.getElementsByClassName("cell");
        for(let i=0; i<cells.length; i++){
            cells[i].classList.remove("possibleCell", "droppable");
            
        }
    }
    pawnAction(pawn:Pawn){
        let possibleMoves = [];
        possibleMoves = pawn.getPossibleCells(pawn.position, pawn.color);
        this.hightlightCells(possibleMoves);
    }
    rokAction(rok:Rok){
        let possibleMoves = [];
        possibleMoves = rok.getPossibleCells(rok.position, rok.color);
        this.hightlightCells(possibleMoves);
    }
    knightAction(knight:Knight){
        let possibleMoves = [];
        possibleMoves = knight.getPossibleCells(knight.position, knight.color);
        this.hightlightCells(possibleMoves);
    }
    bishopAction(bishop:Bishop){
        let possibleMoves = [];
        possibleMoves = bishop.getPossibleCells(bishop.position, bishop.color);
        this.hightlightCells(possibleMoves);
       
    }
    queenAction(queen:Queen){
        let possibleMoves = [];
        possibleMoves = queen.getPossibleCells(queen.position, queen.color);
        this.hightlightCells(possibleMoves);
       
    }
     kingAction(king:King){
        let possibleMoves = [];
        possibleMoves = king.getPossibleCells(king.position, king.color);
        this.hightlightCells(possibleMoves);
       
    }
    hightlightCells(cellCoords: Array<Coordinates>){
        cellCoords.forEach(element=>{
            let buf = element.y.toString()+element.x.toString();
           let cell = document.getElementById(buf);
        
           cell.classList.add("possibleCell", "droppable");
        })
    }
    
}