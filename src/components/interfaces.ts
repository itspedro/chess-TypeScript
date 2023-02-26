import Piece from "./Piece";


export interface ISquareProps {
    col: number;
    row: number;
    isBlack: boolean;
    content: Piece | null | undefined;
}

export interface IPieceProps {
    piece: Piece;
}

export interface IBoardProps {
    pieces: Piece[];
}