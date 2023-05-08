import { Position, Piece, PieceType, PieceColor } from "@/types/interfaces";

const imageMap = {
  king: {
    black:
      "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg",
    white:
      "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg",
  },
  queen: {
    black:
      "https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg",
    white:
      "https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg",
  },
  rook: {
    black:
      "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg",
    white:
      "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg",
  },
  bishop: {
    black:
      "https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg",
    white:
      "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg",
  },
  knight: {
    black:
      "https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg",
    white:
      "https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg",
  },
  pawn: {
    black:
      "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg",
    white:
      "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg",
  },
};

export class Pawn implements Piece {
  constructor(
    public position: Position,
    public color: PieceColor,
    public type: PieceType = "pawn"
  ) {}

  getImg(): string {
    return imageMap[this.type][this.color];
  }

  possibleMovements(): Position[] {
    //const moves: IPosition[] = [];
    const initialPos =
      (this.color === "black" && this.position.row === 1) ||
      (this.color === "white" && this.position.row === 6);
    return [
      {
        row: initialPos
          ? this.color === "black"
            ? this.position.row + 2
            : this.position.row - 2
          : this.color === "black"
          ? this.position.row + 1
          : this.position.row - 1,
        col: this.position.col,
      },
      {
        row:
          this.color === "black"
            ? this.position.row + 1
            : this.position.row - 1,
        col: this.position.col,
      },
    ];
  }

  getPosition(): Position {
    return this.position;
  }

  setPosition(position: Position): void {
    this.position = position;
  }
}
export class Rook implements Piece {
  constructor(
    public position: Position,
    public color: PieceColor,
    public type: PieceType = "rook"
  ) {}

  getImg(): string {
    return imageMap[this.type][this.color];
  }  

  possibleMovements(): Position[] {
    const moves: Position[] = [];
    const directions = [
      { row: 1, col: 0 },
      { row: -1, col: 0 },
      { row: 0, col: 1 },
      { row: 0, col: -1 },
    ];

    for (const direction of directions) {
      let newPosition = {
        row: this.position.row + direction.row,
        col: this.position.col + direction.col,
      };
      for (let i = 0; i < 7; i++) {
        moves.push(newPosition);
        newPosition = {
          row: newPosition.row + direction.row,
          col: newPosition.col + direction.col,
        };
      }
    }

    return moves;
  }

  getPosition(): Position {
    return this.position;
  }

  setPosition(position: Position): void {
    this.position = position;
  }
}
export class Bishop implements Piece {
  constructor(
    public position: Position,
    public color: PieceColor,
    public type: PieceType = "bishop"
  ) {}

  getImg(): string {
    return imageMap[this.type][this.color];
  }

  possibleMovements(): Position[] {
    const moves: Position[] = [];
    const directions = [
      { row: 1, col: 1 },
      { row: -1, col: -1 },
      { row: 1, col: -1 },
      { row: -1, col: 1 },
    ];

    for (const direction of directions) {
      let newPosition = {
        row: this.position.row + direction.row,
        col: this.position.col + direction.col,
      };
      for (let i = 0; i < 7; i++) {
        moves.push(newPosition);
        newPosition = {
          row: newPosition.row + direction.row,
          col: newPosition.col + direction.col,
        };
      }
    }

    return moves;
  }

  getPosition(): Position {
    return this.position;
  }

  setPosition(position: Position): void {
    this.position = position;
  }
}
export class King implements Piece {
  constructor(
    public position: Position,
    public color: PieceColor,
    public type: PieceType = "king"
  ) {}

  getImg(): string {
    return imageMap[this.type][this.color];
  }

  possibleMovements(): Position[] {
    const moves: Position[] = [];
    const directions = [
      { row: 1, col: 1 },
      { row: -1, col: -1 },
      { row: 1, col: -1 },
      { row: -1, col: 1 },
      { row: 1, col: 0 },
      { row: -1, col: 0 },
      { row: 0, col: 1 },
      { row: 0, col: -1 },
    ];

    for (const direction of directions) {
      let newPosition = {
        row: this.position.row + direction.row,
        col: this.position.col + direction.col,
      };
      for (let i = 0; i < 1; i++) {
        moves.push(newPosition);
        newPosition = {
          row: newPosition.row + direction.row,
          col: newPosition.col + direction.col,
        };
      }
    }

    return moves;
  }

  getPosition(): Position {
    return this.position;
  }

  setPosition(position: Position): void {
    this.position = position;
  }
}
export class Knight implements Piece {
  constructor(
    public position: Position,
    public color: PieceColor,
    public type: PieceType = "knight"
  ) {}

  getImg(): string {
    return imageMap[this.type][this.color];
  }

  possibleMovements(): Position[] {
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
    ];
  }

  getPosition(): Position {
    return this.position;
  }

  setPosition(position: Position): void {
    this.position = position;
  }
}
export class Queen implements Piece {
  constructor(
    public position: Position,
    public color: PieceColor,
    public type: PieceType = "queen"
  ) {}

  getImg(): string {
    return imageMap[this.type][this.color];
  }

  possibleMovements(): Position[] {
    const moves: Position[] = [];
    const directions = [
      { row: 1, col: 1 },
      { row: -1, col: -1 },
      { row: 1, col: -1 },
      { row: -1, col: 1 },
      { row: 1, col: 0 },
      { row: -1, col: 0 },
      { row: 0, col: 1 },
      { row: 0, col: -1 },
    ];

    for (const direction of directions) {
      let newPosition = {
        row: this.position.row + direction.row,
        col: this.position.col + direction.col,
      };
      for (let i = 0; i < 7; i++) {
        moves.push(newPosition);
        newPosition = {
          row: newPosition.row + direction.row,
          col: newPosition.col + direction.col,
        };
      }
    }

    return moves;
  }

  getPosition(): Position {
    return this.position;
  }

  setPosition(position: Position): void {
    this.position = position;
  }
}
