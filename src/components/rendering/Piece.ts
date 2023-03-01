type PieceType = "king" | "queen" | "rook" | "bishop" | "knight" | "pawn";
type PieceColor = "black" | "white";

export default class Piece {
    color: PieceColor;
    type: PieceType;
    row: number;
    col: number;
    captured: boolean;
    fen: string;

    constructor(color: PieceColor, type: PieceType, row: number, col: number, captured: boolean, fen: string) {
        this.color = color;
        this.type = type;
        this.row = row;
        this.col = col;
        this.captured = false;
        this.fen = fen;
    }

}