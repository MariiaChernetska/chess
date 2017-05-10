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
    drag: DragnDrop = new DragnDrop(this.getElement, this.removeHighlighting);
    static self: any;
    figure: any;
    constructor(){
        //console.log(this.board.blackPieces.King.getPossibleCells(this.board.blackPieces.King.position))
       Game.self = this;
    }
    getElement(elem:any){
         if(elem.className.indexOf("pawn") != -1){
           // Game.self.pawnAction(elem)
         }
        
        
    }
    
    pawnAction(elem:any){
       
            let pawn: any = {};
            let possibleMoves = [];
            let initCoords = new Coordinates(elem.elem.dataset.coords.charAt(1), elem.elem.dataset.coords.charAt(0));
            if(elem.elem.className.indexOf("black") != -1){
                this.board.blackPieces.Pawns.forEach(element=>{
                    if(elem.elem.dataset.id == element.id){
                        pawn = element;
                    }
                });
                pawn.position = initCoords;
                possibleMoves = pawn.getPossibleCells(pawn.position, Color.Black);
                this.hightlightCells(possibleMoves);
                console.log(possibleMoves)
            }
            else{
                this.board.whitePieces.Pawns.forEach(element=>{
                    if(elem.elem.dataset.id == element.id){
                        pawn = element;
                    }
                })
                pawn.position = initCoords;
                possibleMoves = pawn.getPossibleCells(pawn.position, Color.White);
                this.hightlightCells(possibleMoves);
                console.log(possibleMoves)
            }
           
      
       
    }
    hightlightCells(cellCoords: Array<Coordinates>){
        cellCoords.forEach(element=>{
            let buf = element.y.toString()+element.x.toString();
           let cell = document.getElementById(buf);
           cell.className += " possibleCell droppable";
        })
    }
    removeHighlighting(){
        let cells = document.getElementsByClassName("cell");
        for(let i=0; i<cells.length;i++){
            cells[i].className = cells[i].className.replace(" possibleCell droppable", "");

        }
        
    }
}