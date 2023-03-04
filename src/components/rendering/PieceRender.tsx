import { IPieceProps } from "./interfaces";

export const PieceRender: React.FC<IPieceProps> = ({ piece }) => {

    const { type, color } = piece;

    const imageMap = {
        king: {
            black: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg",
            white: "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg",  
        }, 
        queen: {
            black: "https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg",
            white: "https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg",  
        }, 
        rook: {
            black: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg",
            white: "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg",  
        }, 
        bishop: {
            black: "https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg",
            white: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg",  
        }, 
        knight: {
            black: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg",
            white: "https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg",  
        }, 
        pawn: {
            black: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg",
            white: "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg",  
        }, 
    };

    const iconUrl = imageMap[type][color]
    
    return (
        <div className="piece" style={{ backgroundColor: 'transparent' }}>
            <img src={iconUrl} alt={`${type} ${color}`}/>
        </div>
    )
    

}