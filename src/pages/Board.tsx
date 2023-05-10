import { BoardProps, Position, Piece } from '@/types/interfaces';
import '../styles/board.css';
import { useEffect, useState } from 'react';
import Square from '../components/Square';

function Board({ pieces }: BoardProps) {
  const nRow = 8;
  const nCol = 8;

  const [possibleMoves, setPossibleMoves] = useState<Position[]>([]);
  const [targetPos, setTargetPos] = useState<Position>();
  const [selectedPiece, setSelectedPiece] = useState<Piece | undefined>(
    undefined
  );

  const handleSquareClick = (
    piece: Piece | undefined,
    position: Position
  ): void => {
    const currentPosition = position;
    if (piece) {
      setPossibleMoves(piece.possibleMovements());
      setSelectedPiece(piece);
    }

    if (!piece && possibleMoves) {
      setTargetPos(
        possibleMoves.find(
          (pos) => pos.row === currentPosition.row && pos.col === currentPosition.col
        )
      );
    }
  };

  useEffect(() => {
    if (selectedPiece && targetPos) {
      pieces.map((piece) => {
        if (piece === selectedPiece) {
          piece.setPosition(targetPos);
        }
        return piece;
      });

      setPossibleMoves([]);
      setTargetPos(undefined);
    }
  }, [targetPos, selectedPiece, pieces]);

  const generateBoard = () => {
    const squares = [];

    for (let row = 0; row < nRow; row++) {
      for (let col = 0; col < nCol; col++) {
        const isBlack = (row + col) % 2 === 1;
        const squarePiece = pieces.find(
          (piece) => piece.position.row === row && piece.position.col === col
        );
        const posMoves = possibleMoves.find(
          (move) => move.row === row && move.col === col
        );
        const position: Position = { row: row, col: col };

        squares.push(
          <Square
            row={row}
            col={col}
            isBlack={isBlack}
            content={squarePiece}
            isPossible={posMoves !== undefined}
            onClick={() => handleSquareClick(squarePiece, position)}
            key={`${row}-${col}`}
          />
        );
      }
    }

    return squares;
  };

  return (
    <div className="board-container">
      <div className="board">{generateBoard()}</div>
    </div>
  );
}

export default Board;
