import Piece from './Piece';
import { SquareProps } from '@/types/interfaces';

function Square({ isBlack, content, isPossible, onClick }: SquareProps) {
  const color = isBlack ? 'black' : 'white';
  const squareContent =
    (content && <Piece piece={content} />) ||
    (isPossible ? <span className={'dot'}></span> : '');
  const squareClass = `${color} ${isPossible ? 'possible' : ''}`;

  return (
    <div onClick={onClick} className={`square ${squareClass}`}>
      {squareContent}
    </div>
  );
}

export default Square;
