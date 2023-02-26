import { IGameState, IMove } from '../rendering/interfaces';
import { useState } from 'react';

export const isMoveValid = (gameState: IGameState, move: IMove): boolean => {

    const [valid, setValid] = useState<boolean>(true);

    const { fromCol, toCol, fromRow, toRow } = move;

    const current = gameState.board[fromRow][fromCol];
    const target = gameState.board[toRow][toCol];

    !current && false;

    current.color !== gameState.turn && false;

    target && target.color === current.color && false;

    if(current.type === 'pawn') {

        const isPawnValidMove = (
            (current.color === 'white' && toRow === fromRow - 1) ||
            (current.color === 'black' && toRow === fromRow + 1)
        );

        if(isPawnValidMove){
            return false
        }
    } else if(current.type === 'rook') {
        //return false
    };
    
    return true;  
}