import './styles/board.css'
import { ISquareProps, IBoardProps } from './interfaces';
import Piece from './Piece';
import { PieceRender } from './PieceRender';


const Square: React.FC<ISquareProps> = ({ isBlack, content }) => {   
    const color = isBlack ? 'black' : 'white';
    const squareContent = content && <PieceRender piece={content} />;
    return  <div className={`square ${color}`}>{squareContent}</div>;    
};

export const Board: React.FC<IBoardProps> = ({ pieces }) => {
    const nRow: number = 8; 
    const nCol: number = 8; 

    const generateBoard = () => {
        const squares = [];

        const pieces = [
            new Piece(true, "rook", 0, 0, false, "R"),
            new Piece(true, "knight", 0, 1, false, "N"),
            new Piece(true, "bishop", 0, 2, false, "B"),
            new Piece(true, "queen", 0, 3, false, "Q"),
            new Piece(true, "king", 0, 4, false, "K"),
            new Piece(true, "bishop", 0, 5, false, "B"),
            new Piece(true, "knight", 0, 6, false, "N"),
            new Piece(true, "rook", 0, 7, false, "R"),
            new Piece(true, "pawn", 1, 0, false, "P"),
            new Piece(true, "pawn", 1, 1, false, "P"),
            new Piece(true, "pawn", 1, 2, false, "P"),
            new Piece(true, "pawn", 1, 3, false, "P"),
            new Piece(true, "pawn", 1, 4, false, "P"),
            new Piece(true, "pawn", 1, 5, false, "P"),
            new Piece(true, "pawn", 1, 6, false, "P"),
            new Piece(true, "pawn", 1, 7, false, "P"),
            new Piece(false, "rook", 7, 0, false, "r"),
            new Piece(false, "knight", 7, 1, false, "n"),
            new Piece(false, "bishop", 7, 2, false, "b"),
            new Piece(false, "queen", 7, 3, false, "q"),
            new Piece(false, "king", 7, 4, false, "k"),
            new Piece(false, "bishop", 7, 5, false, "b"),
            new Piece(false, "knight", 7, 6, false, "n"),
            new Piece(false, "rook", 7, 7, false, "r"),
            new Piece(false, "pawn", 6, 0, false, "p"),
            new Piece(false, "pawn", 6, 1, false, "p"),
            new Piece(false, "pawn", 6, 2, false, "p"),
            new Piece(false, "pawn", 6, 3, false, "p"),
            new Piece(false, "pawn", 6, 4, false, "p"),
            new Piece(false, "pawn", 6, 5, false, "p"),
            new Piece(false, "pawn", 6, 6, false, "p"),
            new Piece(false, "pawn", 6, 7, false, "p"),
        ];

        for(let row = 0; row < nRow; row++) {
            for(let col = 0; col < nCol; col++) {
                const isBlack = (row + col) % 2 === 1;
                const squarePiece = pieces.find((piece) => piece.row === row && piece.col === col ? piece : null);
                squares.push(<Square row={row} col={col} isBlack={isBlack} content={squarePiece} />);
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