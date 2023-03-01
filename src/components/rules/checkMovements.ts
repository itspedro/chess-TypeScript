// import { possibleMovements } from './checkMovements';
import { IPosition } from "../rendering/interfaces";
import Piece from "../rendering/Piece";


export const possibleMovements = (piece: Piece): IPosition[] => {
    const { row, col } = piece;
    console.log(`a Peça "${piece.type}" está na linha: ${row + 1} e na coluna: ${col + 1}`);
    

    return[{row, col}];
};

// export class Pawn implements Piece {
//     color: PieceColor;
//     type: PieceType;
//     row: number;
//     col: number;
//     captured: boolean;
//     fen: string;

//     constructor(color: PieceColor, type: PieceType, row: number, col: number, captured: boolean, fen: string) {
//         this.color=color;
//         this.type= "pawn";
//         this.row=row;
//         this.col=col;
//         this.captured= false;
//         this.fen=fen;
//     }

//     possibleMovements(): IPosition[] {

//         console.log(`O peão está na linha: ${this.row}\ne na coluna: ${this.col}`);
//         return [{row: this.row, col: this.col}]
//     }
// }


// export class Pawn implements IPiece {

    
//     possibleMovements(): IPosition[] {


//         console.log(`O peão está na linha: ${row}\ne na coluna: ${col}`);

//         // const movements = [];
//         // const direction = 1;
//         // const squareInFront = { row: this.row + direction, col: this.col };
//         // return [{
//         //     row: 0,
//         //     col: 0,
//         // }]

//         return [{row, col}];
//     }
// };

// export class Rook implements IPiece {
//     row: number;
//     col: number;
//     constructor(row: number, col: number) {
//         this.row = row;
//         this.col = col;
//     }
//     possibleMovements(): IPosition[] {
//         const movements = [];
//         const direction = 1;
//         const squareInFront = { row: this.row + direction, col: this.col };
//         return [{
//             row: 0,
//             col: 0,
//         }]
//     }
// };

// export const possivelMoviments = (piece: Piece): IPosition[] => {
//     return piece.possibleMovements()
// };