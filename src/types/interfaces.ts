export interface SquareProps {
    row: number;
    col: number;
    isBlack: boolean;
    content: Piece | undefined;
    isPossible: boolean;
    onClick: React.MouseEventHandler<HTMLDivElement>;
};

export interface PieceProps {
    piece: Piece;
};

export interface BoardProps {
    pieces: Piece[];
};

export type Position = {
    row: number;
    col: number;
}

export type PieceType = "king" | "queen" | "rook" | "bishop" | "knight" | "pawn";
export type PieceColor = "black" | "white";


export interface Piece {
    type: PieceType;
    color: PieceColor;
    position: Position;
    getImg(): string;
    possibleMovements(): Position[];
    getPosition(): Position;
    setPosition(position: Position): void;
};
