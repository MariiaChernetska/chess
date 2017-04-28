import {Cell} from './Cell'
import {Coordinates} from './Coordinates'
import {King} from './King'
import {Color} from './Piece'
import {Piece} from './Piece'
export class Board{
    cells: any = [];
    board: HTMLElement = document.getElementById('board');
    constructor() {
        
       this.drawBoard(this.board);
       let kingB = new King(Color.Black, Color.White)
       let kingW = new King(Color.White, Color.White)
       this.drawFigure(kingB);
       this.drawFigure(kingW);
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
                board.appendChild(cell)

            }
        }
        console.log(this.cells)

    }
    drawFigure(figure: Piece){
        let elementId = figure.position.y.toString()+figure.position.x.toString();
        let cell = document.getElementById(elementId);
        let piece = document.createElement("div")
        piece.className = figure.className;
        cell.appendChild(piece)
    }
}