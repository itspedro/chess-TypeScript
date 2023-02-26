type PieceType = "king" | "queen" | "rook" | "bishop" | "knight" | "pawn";
type PlayerColor = "black" | "white";

export default class Piece {
    color: PlayerColor;
    type: PieceType;
    row: number;
    col: number;
    captured: boolean;
    fen: string;

    constructor(color: PlayerColor, type: PieceType, row: number, col: number, captured: boolean, fen: string) {
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