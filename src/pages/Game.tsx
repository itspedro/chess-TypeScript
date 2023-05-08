import {
  Pawn,
  Rook,
  Knight,
  Queen,
  Bishop,
  King,
} from "../app/logic/PieceClass";
import Board from "./Board";


function Game() {
  return (
    <div className="wrapper">


    <Board
      pieces={[
        new Rook({ col: 0, row: 0 }, "black"),
        new Knight({ col: 1, row: 0 }, "black"),
        new Bishop({ col: 2, row: 0 }, "black"),
        new Queen({ col: 3, row: 0 }, "black"),
        new King({ col: 4, row: 0 }, "black"),
        new Bishop({ col: 5, row: 0 }, "black"),
        new Knight({ col: 6, row: 0 }, "black"),
        new Rook({ col: 7, row: 0 }, "black"),
        new Pawn({ col: 0, row: 1 }, "black"),
        new Pawn({ col: 1, row: 1 }, "black"),
        new Pawn({ col: 2, row: 1 }, "black"),
        new Pawn({ col: 3, row: 1 }, "black"),
        new Pawn({ col: 4, row: 1 }, "black"),
        new Pawn({ col: 5, row: 1 }, "black"),
        new Pawn({ col: 6, row: 1 }, "black"),
        new Pawn({ col: 7, row: 1 }, "black"),
        new Pawn({ col: 0, row: 6 }, "white"),
        new Pawn({ col: 1, row: 6 }, "white"),
        new Pawn({ col: 2, row: 6 }, "white"),
        new Pawn({ col: 3, row: 6 }, "white"),
        new Pawn({ col: 4, row: 6 }, "white"),
        new Pawn({ col: 5, row: 6 }, "white"),
        new Pawn({ col: 6, row: 6 }, "white"),
        new Pawn({ col: 7, row: 6 }, "white"),
        new Rook({ col: 0, row: 7 }, "white"),
        new Knight({ col: 1, row: 7 }, "white"),
        new Bishop({ col: 2, row: 7 }, "white"),
        new Queen({ col: 3, row: 7 }, "white"),
        new King({ col: 4, row: 7 }, "white"),
        new Bishop({ col: 5, row: 7 }, "white"),
        new Knight({ col: 6, row: 7 }, "white"),
        new Rook({ col: 7, row: 7 }, "white"),
      ]}
      />
  </div>
  );
}

export default Game;
