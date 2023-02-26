type PieceType = "king" | "queen" | "rook" | "bishop" | "knight" | "pawn";

export default class Piece {
    color: boolean;
    type: PieceType;
    row: number;
    col: number;
    captured: boolean;
    fen: string;

    constructor(color: boolean, type: PieceType, row: number, col: number, captured: boolean, fen: string) {
        this.color = color;
        this.type = type;
        this.row = row;
        this.col = col;
        this.captured = false;
        this.fen = fen;
    }

    move(row: number, col: number) {
        this.row = row;
        this.col = col;
    }
}