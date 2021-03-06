﻿import {Cell} from './Cell'
import {Coordinates} from './Coordinates'
import {King} from './King'
import {Queen} from './Queen'
import {Pawn} from './Pawn'
import {Bishop} from './Bishop'
import {Knight} from './Knight'
import {Rok} from './Rok'
import {Color} from './Piece'
import {Piece} from './Piece'
import {DragnDrop} from '../src/dragdrop'
class Side{
    Pawns: Array<Pawn>;
    Bishops: Array<Bishop>;
    Knights: Array<Knight>;
    Roks: Array<Rok>;
    King: King;
    Queen: Queen;
    constructor(){
        this.Pawns = new Array<Pawn>();
        this.Bishops = new Array<Bishop>();
        this.Knights = new Array<Knight>();
        this.Roks = new Array<Rok>();
        
    }
}
export class Board{
    cells: any = [];
    
    reverseCells: any = []
    board: HTMLElement = document.getElementById('board');
    reverseBoard: HTMLElement = document.getElementById('reverse-board');
    gameColor: Color;
   /* whitePieces: Side = new Side();
    blackPieces: Side = new Side();*/
    whitePieces: Array<any> = [];
    blackPieces: Array<any> = [];
    constructor() {
       
        this.gameColor = 0;
        if(this.gameColor == Color.Black){
                this.drawBoard(this.board);
        }
        else{
            this.drawReverseBoard(this.reverseBoard);
        }
        this.addFigures();
    }
    drawBoard(board: HTMLElement){
         for (let i = 0; i < 8; i++) {
            this.cells[i] = new Array<Cell>();
            for (let j = 0; j < 8; j++) {
                this.cells[i].push(new Cell(true, false, new Coordinates(i, j)));
                let cell = document.createElement('div');
                cell.id = i.toString()+j.toString();
                
                if(i%2==0){
                    if(j%2==0){
                        cell.className = "cell light";
                    }
                    else{
                        cell.className = "cell dark";

                    }
                }
                else{
                    if(j%2==0){
                        cell.className = "cell dark";
                    }
                    else{
                       cell.className = "cell light";
                    }
                }
                if(cell.id == '45') cell.className = "cell dark droppable";
                board.appendChild(cell)

            }
        }
     

    }
    drawReverseBoard(board: HTMLElement){
         for (let i = 7; i >= 0; i--) {
            this.reverseCells[i] = new Array<Cell>();
            for (let j = 7; j >= 0; j--) {
                this.reverseCells[i].push(new Cell(true, false, new Coordinates(i, j)));
                let cell = document.createElement('div');
                cell.id = i.toString()+j.toString();
                if(i%2==0){
                    if(j%2==0){
                        cell.className = "cell light";
                    }
                    else{
                        cell.className = "cell dark";
 
                    }
                }
                else{
                    if(j%2==0){
                        cell.className = "cell dark";
                    }
                    else{
                       cell.className = "cell light";
                    }
                }
                board.appendChild(cell)

            }
        }
 

    }
    addFigures(){

        for(let i = 0; i<8; i++){
                this.blackPieces.push(
                        new Pawn(Color.Black, new Coordinates(i,6), "b-pawn-"+i)
                ); 

                this.drawFigure(this.blackPieces[i])
                    this.whitePieces.push(
                        new Pawn(Color.White, new Coordinates(i,1), "w-pawn-"+i)
                ); 
                this.drawFigure(this.whitePieces[i])
            }
            this.blackPieces.push(
                   this.drawFigure(new Bishop(Color.Black, new Coordinates(2, 7), "b-bishop-0")),
                    this.drawFigure(new Bishop(Color.Black, new Coordinates(5, 7), "b-bishop-1")));
            this.blackPieces.push(
                    this.drawFigure(new Knight(Color.Black, new Coordinates(1, 7), "b-knight-0")),
                    this.drawFigure(new Knight(Color.Black, new Coordinates(6, 7), "b-knight-1")));
            this.blackPieces.push(
                    this.drawFigure(new Rok(Color.Black, new Coordinates(0, 7), "b-rock-0")),
                    this.drawFigure(new Rok(Color.Black, new Coordinates(7, 7), "b-rock-1")));
            this.blackPieces.push(this.drawFigure(new King(Color.Black, new Coordinates(4, 7),"b-king-0")));
            this.blackPieces.push(this.drawFigure(new Queen(Color.Black, new Coordinates(3, 7), "b-queen-0")));

          this.whitePieces.push(
                    this.drawFigure(new Bishop(Color.White, new Coordinates(2, 0), "w-bishop-0")),
                    this.drawFigure(new Bishop(Color.White, new Coordinates(5, 0), "w-bishop-1")));

            this.whitePieces.push(
                    this.drawFigure(new Knight(Color.White, new Coordinates(1, 0), "w-knight-0")),
                    this.drawFigure(new Knight(Color.White, new Coordinates(6, 0), "w-knight-1")));
            this.whitePieces.push(
                    this.drawFigure(new Rok(Color.White, new Coordinates(0, 0), "w-rock-0")),
                    this.drawFigure(new Rok(Color.White, new Coordinates(7, 0), "w-rock-1")));
            this.whitePieces.push(this.drawFigure(new King(Color.White, new Coordinates(4, 0), "w-king-0")));
            this.whitePieces.push(this.drawFigure(new Queen(Color.White, new Coordinates(3, 0),"w-queen-0")));


            /*for(let i = 0; i<8; i++){
                this.blackPieces.Pawns.push(
                        new Pawn(Color.Black, new Coordinates(i,6), "b-pawn-"+i)
                ); 
                this.drawFigure(this.blackPieces.Pawns[i])
                    this.whitePieces.Pawns.push(
                        new Pawn(Color.White, new Coordinates(i,1), "w-pawn-"+i)
                ); 
                this.drawFigure(this.whitePieces.Pawns[i])
            }
            this.blackPieces.Bishops.push(
                   this.drawFigure(new Bishop(Color.Black, new Coordinates(2, 7), "b-bishop-0")),
                    this.drawFigure(new Bishop(Color.Black, new Coordinates(5, 7), "b-bishop-1")));
            this.blackPieces.Knights.push(
                    this.drawFigure(new Knight(Color.Black, new Coordinates(1, 7), "b-knight-0")),
                    this.drawFigure(new Knight(Color.Black, new Coordinates(6, 7), "b-knight-1")));
            this.blackPieces.Roks.push(
                    this.drawFigure(new Rok(Color.Black, new Coordinates(0, 7), "b-rock-0")),
                    this.drawFigure(new Rok(Color.Black, new Coordinates(7, 7), "b-rock-1")));
            this.blackPieces.King =  this.drawFigure(new King(Color.Black, new Coordinates(4, 7),"b-king-0"));
            this.blackPieces.Queen = this.drawFigure(new Queen(Color.Black, new Coordinates(3, 7), "b-queen-0"));

          this.whitePieces.Bishops.push(
                    this.drawFigure(new Bishop(Color.White, new Coordinates(2, 0), "w-bishop-0")),
                    this.drawFigure(new Bishop(Color.White, new Coordinates(5, 0), "w-bishop-1")));

            this.whitePieces.Knights.push(
                    this.drawFigure(new Knight(Color.White, new Coordinates(1, 0), "w-knight-0")),
                    this.drawFigure(new Knight(Color.White, new Coordinates(6, 0), "w-knight-1")));
            this.whitePieces.Roks.push(
                    this.drawFigure(new Rok(Color.White, new Coordinates(0, 0), "w-rock-0")),
                    this.drawFigure(new Rok(Color.White, new Coordinates(7, 0), "w-rock-1")));
            this.whitePieces.King =  this.drawFigure(new King(Color.White, new Coordinates(4, 0), "w-king-0"));
            this.whitePieces.Queen = this.drawFigure(new Queen(Color.White, new Coordinates(3, 0),"w-queen-0"));
          */
    

    }
    drawFigure(figure: any){
        let targetCell = figure.position.y.toString()+figure.position.x.toString();
        let cell = document.getElementById(targetCell);
        let piece = document.createElement("div")
        piece.className = figure.className;
        piece.dataset.coords = targetCell;
        piece.id = figure.id;
        cell.appendChild(piece);
        return figure;
    }
}