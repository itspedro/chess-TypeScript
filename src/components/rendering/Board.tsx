import { ISquareProps, IBoardProps, IPosition, IPiece } from './interfaces';
import { PieceRender } from './PieceRender';
import '../styles/board.css';
import { useEffect, useState } from 'react';


const Square: React.FC<ISquareProps> = ({ isBlack, content, isPossible, onClick }) => {   
    const color = isBlack ? 'black' : 'white';
    const squareContent = (content && <PieceRender piece={content} />) || (isPossible ?  <span className={'dot'}></span> : '')
    const squareClass = `${color} ${isPossible ? 'possible' : ''}`;


    return  <div onClick={onClick} className={`square ${squareClass}`}>{squareContent}</div>
};

export const Board: React.FC<IBoardProps> = ({ pieces }) => {

    const nRow: number = 8; 
    const nCol: number = 8;

    const [ possibleMoves, setPossibleMoves ] = useState<IPosition[]>([]);
    const [ targetPos, setTargetPos ] = useState<IPosition | undefined >(undefined);
    const [ selectedPiece, setSelectedPiece ] = useState<IPiece | undefined>(undefined);

    const handleSquareClick = (piece: IPiece | undefined, position: IPosition): void => {

        const currentPosition = position;
        if(piece) {
            const possible: IPosition[] = piece.possibleMovements();
            setPossibleMoves(possible);
            setSelectedPiece(piece);
        } else {
            setPossibleMoves([])
        };

        if (!piece && possibleMoves) {
            setTargetPos(possibleMoves.find((pos) => pos.row === currentPosition.row && pos.col === currentPosition.col));
        };
    };

    useEffect(() => {

        if (selectedPiece && targetPos) {

            pieces.map((piece) => {
                if (piece === selectedPiece) {
                    piece.setPosition(targetPos);
                };
                return piece;
            });

            setPossibleMoves([]);
            setTargetPos(undefined);

        };

    }, [targetPos, selectedPiece, pieces]);

    const generateBoard = () => {
        const squares = [];

        for(let row = 0; row < nRow; row++) {
            for(let col = 0; col < nCol; col++) {
                const isBlack = (row + col) % 2 === 1;
                const squarePiece = pieces.find((piece) => piece.position.row === row && piece.position.col === col);
                const posMoves = possibleMoves.find((move) => move.row === row && move.col === col);
                const position: IPosition = {row: row, col: col};

                squares.push(<Square 
                    row={row}
                    col={col}
                    isBlack={isBlack}
                    content={squarePiece}
                    isPossible={posMoves !== undefined}
                    onClick={() => handleSquareClick(squarePiece, position)}
                    />);
            };
        };
        
        return squares;
        
    };

    return (
        <div className="board-container">
            <div className="board">{generateBoard()}</div>
        </div>
    );
};