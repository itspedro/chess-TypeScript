import { Pawn, Rook, Knight } from '../rules/checkMovements';
import { Board } from './Board';

export const Rendering = () => {

    return (
        <Board pieces={[
        new Pawn({col:0, row:1}, "black"),
        new Pawn({col:1, row:6}, "white"),
        new Pawn({col:2, row:0}, "black"),
        new Rook({col:3, row:0}, "white"),
        new Knight({col:6, row:0}, "white"),
    ]}/>
    )
}