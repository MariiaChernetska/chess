import {Cell} from './Cell'
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
export class Board{
    cells: any = [];
    
    reverseCells: any = []
    board: HTMLElement = document.getElementById('board');
    reverseBoard: HTMLElement = document.getElementById('reverse-board');
    gameColor: Color;
    whitePieces: Array<Piece> = [];
    blackPieces: Array<Piece> = [];
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
        console.log(this.cells)

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
        console.log(this.cells)

    }
    addFigures(){
            for(let i = 0; i<8; i++){
                this.blackPieces.push(
                        new Pawn(Color.Black, new Coordinates(i,6))
                ); 
                    this.whitePieces.push(
                        new Pawn(Color.White, new Coordinates(i,1))
                ); 
            }

            this.blackPieces.push(
                    new King(Color.Black, new Coordinates(4, 7)), 
                    new Queen(Color.Black, new Coordinates(3, 7)), 
                    new Bishop(Color.Black, new Coordinates(2, 7)),
                    new Bishop(Color.Black, new Coordinates(5, 7)),
                    new Knight(Color.Black, new Coordinates(1, 7)),
                    new Knight(Color.Black, new Coordinates(6, 7)),
                    new Rok(Color.Black, new Coordinates(0, 7)),
                    new Rok(Color.Black, new Coordinates(7, 7)),
                );
            this.whitePieces.push(
                    new King(Color.White, new Coordinates(4, 0)), 
                    new Queen(Color.White, new Coordinates(3, 0)),
                    new Bishop(Color.White, new Coordinates(2, 0)),
                    new Bishop(Color.White, new Coordinates(5, 0)),
                    new Knight(Color.White, new Coordinates(1, 0)),
                    new Knight(Color.White, new Coordinates(6, 0)),
                    new Rok(Color.White, new Coordinates(0, 0)),
                    new Rok(Color.White, new Coordinates(7, 0))
                    );
        this.blackPieces.forEach(element => {
           this.drawFigure(element);
       });
       this.whitePieces.forEach(element => {
           this.drawFigure(element);
       });

    }
    drawFigure(figure: Piece){
        let targetCell = figure.position.y.toString()+figure.position.x.toString();
        let cell = document.getElementById(targetCell);
        let piece = document.createElement("div")
        piece.className = figure.className;
        piece.dataset.coords = targetCell;
        cell.appendChild(piece)
    }
}