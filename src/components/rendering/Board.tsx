import { Pawn, Rook } from '../rules/checkMovements';
import { ISquareProps, IBoardProps, IPosition } from './interfaces';
import { PieceRender } from './PieceRender';
import '../styles/board.css'

const Square: React.FC<ISquareProps> = ({ isBlack, content }) => {   
    const color = isBlack ? 'black' : 'white';
    const squareContent = content && <PieceRender piece={content} />

    const handleClick = (): IPosition[] => {
        
            if(content !== undefined) {
                const possível = content.possibleMovements();
                return possível
            };
    };

    return  <div onClick={() => handleClick()} className={`square ${color}`}>{squareContent}</div>
};

export const Board: React.FC<IBoardProps> = ({ pieces }) => {

    const nRow: number = 8; 
    const nCol: number = 8; 

    const generateBoard = () => {
        const squares = [];

        const piece =[
            new Pawn({col:0, row:0}, "black"),
            new Pawn({col:1, row:2}, "white"),
            new Pawn({col:2, row:0}, "black"),
            new Rook({col: 3, row: 0}, "white"),
        ]


        for(let row = 0; row < nRow; row++) {
            for(let col = 0; col < nCol; col++) {
                const isBlack = (row + col) % 2 === 1;
                const squarePiece = piece.find((piece) => piece.position.row === row && piece.position.col === col);
                const content = squarePiece !== undefined ? squarePiece : squarePiece;

                squares.push(<Square 
                    row={row}
                    col={col}
                    isBlack={isBlack}
                    content={content}
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