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
        //const moves: IPosition[] = [];
        const initialPos = (this.color === "black" && this.position.row === 1) || (this.color === "white" && this.position.row === 6);
        return [
            {
                row: initialPos ?  this.color === "black" ? this.position.row + 2 : this.position.row - 2 : this.color === "black" ? this.position.row + 1 : this.position.row -1,
                col: this.position.col
            },
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

        const moves: IPosition[] = [];
        const directions = [
            { row: 1, col: 0 },
            { row: -1, col: 0 },
            { row: 0, col: 1 },
            { row: 0, col: -1 },
        ];

        for(const direction of directions) {
            let newPosition = { row: this.position.row + direction.row, col: this.position.col + direction.col}
            for (let i = 0; i < 7; i++) {
                moves.push(newPosition);
                newPosition = { row: newPosition.row + direction.row, col: newPosition.col + direction.col}
            }
        }

        return moves
    }

    getPosition(): IPosition {
        return this.position
    }

    setPosition(position: IPosition): void {
        this.position = position;
    }
}
export class Knight implements IPiece {

    constructor(public position: IPosition, public color: PieceColor, public type: PieceType = "knight") {}

    possibleMovements(): IPosition[] {
        return [
            {
                row: this.position.row + 1,
                col: this.position.col + 2,
            },
            {
                row: this.position.row + 1,
                col: this.position.col - 2,
            },
            {
                row: this.position.row + 2,
                col: this.position.col - 1,
            },
            {
                row: this.position.row + 2,
                col: this.position.col + 1,
            },
            {
                row: this.position.row - 1,
                col: this.position.col - 2,
            },
            {
                row: this.position.row - 1,
                col: this.position.col + 2,
            },
            {
                row: this.position.row - 2,
                col: this.position.col + 1,
            },
            {
                row: this.position.row - 2,
                col: this.position.col - 1,
            },
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