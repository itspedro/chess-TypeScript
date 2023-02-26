import Piece from "./Piece";


export interface ISquareProps {
    col: number;
    row: number;
    isBlack: boolean;
    content: Piece | undefined;
}

export interface IPieceProps {
    piece: Piece;
}

export interface IBoardProps {
    pieces: Piece[];
}

export interface IMove {
    fromRow: number;
    fromCol: number;
    toRow: number;
    toCol: number;
}

type PlayerColor = "black" | "white";

export interface IGameState {
    board: Piece[][];
    turn: PlayerColor;
}