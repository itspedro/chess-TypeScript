import { IPiece, IPosition } from "../rendering/interfaces";
import Piece from "../rendering/Piece";



export const possibleMovements = (piece: Piece): void => {
    return console.log(piece.row, piece.col);
}


export class Pawn implements IPiece {
    possibleMovements(): IPosition[] {
        return [{
            row: 0,
            col: 0
        }]
    }
};

// export const possivelMoviments = (piece: Piece): IPosition[] => {
//     return piece.possibleMovements()
// };