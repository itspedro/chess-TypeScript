import { IPosition, IPiece, PieceType, PieceColor } from "../rendering/interfaces";
export class Pawn implements IPiece {

    constructor(public position: IPosition, public color: PieceColor, public type: PieceType = "pawn") {}
    // img: string[] =  [
    //             "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg",
    //             "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg",  
    //         ]; 

    // getImg(): string { 
    //     return this.color === "black" ? this.img[0] : this.img[1];
    // }

    possibleMovements(): IPosition[] {
        return [
            {
                row: this.color === "black" ? this.position.row + 1 : this.position.row -1,
                col: this.position.col
            }
        ]
    }

    getPosition(): IPosition {
        return this.position
    }

    setPosition(position: IPosition): void {
        this.position = position;
    }

}
export class Rook implements IPiece {

    constructor(public position: IPosition, public color: PieceColor, public type: PieceType = "rook") {}

    possibleMovements(): IPosition[] {
        return [
            {
                row: this.color === "black" ? this.position.row + 1 : this.position.row -1,
                col: this.position.col
            }
        ]
    }

    getPosition(): IPosition {
        return this.position
    }

    setPosition(position: IPosition): void {
        this.position = position;
    }

}
export class Queen implements IPiece {

    constructor(public position: IPosition, public color: PieceColor, public type: PieceType = "queen"){}

    possibleMovements(): IPosition[] {
        return [
            {
                row: this.position.col + 1,
                col: this.position.row
            }
        ]
    }

    getPosition(): IPosition {
        return this.position
    }

    setPosition(position: IPosition): void {
        this.position = position;
    }

}