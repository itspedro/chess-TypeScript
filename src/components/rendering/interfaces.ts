export interface ISquareProps {
    row: number;
    col: number;
    isBlack: boolean;
    content: IPiece | undefined;
    isPossible: boolean;
    onClick: React.MouseEventHandler<HTMLDivElement>;
};

export interface IPieceProps {
    piece: IPiece;
};

export interface IBoardProps {
    pieces: IPiece[];
};

export type IPosition = {
    row: number;
    col: number;
}

export type PieceType = "king" | "queen" | "rook" | "bishop" | "knight" | "pawn";
export type PieceColor = "black" | "white";
export interface IPiece {
    type: PieceType;
    color: PieceColor;
    //getImg(): string;
    possibleMovements(): IPosition[];
    getPosition(): IPosition;
    setPosition(position: IPosition): void;
};
