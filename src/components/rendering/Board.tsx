import { Knight, Pawn, Rook } from '../rules/checkMovements';
import { ISquareProps, IBoardProps, IPosition, IPiece } from './interfaces';
import { PieceRender } from './PieceRender';
import '../styles/board.css'
import { useState } from 'react';


const Square: React.FC<ISquareProps> = ({ isBlack, content, isPossible, onClick }) => {   
    const color = isBlack ? 'black' : 'white';
    const squareContent = content && <PieceRender piece={content} />
    const squareClass = `${color} ${isPossible ? 'possible' : ''}`;
    // const [moves, setMoves] = useState<IPosition[]>();

    // const handleClick = (): void => {
    //         if(content !== undefined) {
    //             const possível = content.possibleMovements();
    //             console.log(possível);
    //         };
    // };

    return  <div onClick={onClick} className={`square ${squareClass}`}>{squareContent}</div>
};

export const Board: React.FC<IBoardProps> = ({ pieces }) => {

    const nRow: number = 8; 
    const nCol: number = 8; 

    const [possibleMoves, setPossibleMoves] = useState<IPosition[]>([]);

    const handleSquareClick = (piece: IPiece | undefined): void => {
        if(piece !== undefined) {
            const possible = piece.possibleMovements();
            setPossibleMoves(possible);
        }
        // if (setPosition && possibleMoves.some((pos) => pos.row === piece?.position.row && pos.col === piece?.position.col)) {
        //     setPosition(piece?.getPosition(), possibleMoves.find(pos => pos.row === piece?.position.row && pos.col === piece?.position.col)!)
        //     setPossibleMoves([]);
        // }
    };

    const generateBoard = () => {
        const squares = [];

        const piece =[
            new Pawn({col:0, row:0}, "black"),
            new Pawn({col:1, row:2}, "white"),
            new Pawn({col:2, row:0}, "black"),
            new Rook({col: 3, row: 0}, "white"),
            new Knight({col: 6, row: 0}, "white"),
        ]


        for(let row = 0; row < nRow; row++) {
            for(let col = 0; col < nCol; col++) {
                const isBlack = (row + col) % 2 === 1;
                const squarePiece = piece.find((piece) => piece.position.row === row && piece.position.col === col);
                const posMoves = possibleMoves.find((move) => move.row === row && move.col === col);
                // const posMoves = moves[0].row === row && moves[1].col === col ? moves : undefined;

                squares.push(<Square 
                    row={row}
                    col={col}
                    isBlack={isBlack}
                    content={squarePiece}
                    isPossible={posMoves !== undefined}
                    onClick={() => handleSquareClick(squarePiece)}
                    // moves={posMoves}
                    />);
            };
        };
        
        return squares;
        
    };

    return (
        <div className="board-container">
            <div className="board">{generateBoard()}</div>
        </div>
    )
};