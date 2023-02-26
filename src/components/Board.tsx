import './styles/board.css'
import { ISquareProps } from './interfaces';
import Piece from './Piece';
import { PieceRender } from './PieceRender';


const Square: React.FC<ISquareProps> = ({ isBlack, content }) => {   
    const color = isBlack ? 'black' : 'white';
    const squareContent = content && <PieceRender piece={content} />;
    return  <div className={`square ${color}`}>{squareContent}</div>;    
};

export const Board: React.FC = () => {
    const nRow: number = 8; 
    const nCol: number = 8; 

    const generateBoard = () => {
        const squares = [];

        const piece = new Piece(true, "pawn", 3, 2, false, "P");

        for(let row = 0; row < nRow; row++) {
            for(let col = 0; col < nCol; col++) {
                const isBlack = (row + col) % 2 === 1;
                const squarePiece = (row === piece.row && col === piece.col) ? piece : null ;
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