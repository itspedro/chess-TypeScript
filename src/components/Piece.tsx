import { PieceProps } from '@/types/interfaces';

function Piece({ piece }: PieceProps) {
  return (
    <div className="piece">
      <img src={piece.getImg()} alt={`${piece.type} ${piece.color}`} />
    </div>
  );
}

export default Piece;
