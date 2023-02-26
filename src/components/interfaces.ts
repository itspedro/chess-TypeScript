import IPiece from "./Piece";
import Piece from "./Piece";

export interface ISquareProps {
    col: number;
    row: number;
    isBlack: boolean;
    content: IPiece | null;
}

export interface IPieceProps {
    piece: Piece;
}