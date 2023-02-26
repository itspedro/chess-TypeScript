import { IPieceProps } from "./interfaces";

export const PieceRender: React.FC<IPieceProps> = ({ piece }) => {

    const { type, color } = piece;

    const imageMap = {
        king: {
            black: "../pieces/king-black.png",
            white: "../pieces/king-white.png",  
        }, 
        queen: {
            black: "../pieces/queen-black.png",
            white: "../pieces/queen-white.png",  
        }, 
        rook: {
            black: "../pieces/rook-black.png",
            white: "../pieces/rook-white.png",  
        }, 
        bishop: {
            black: "../pieces/bishop-black.png",
            white: "../pieces/bishop-white.png",  
        }, 
        knight: {
            black: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg",
            white: "../pieces/knight-white.png",  
        }, 
        pawn: {
            black: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg",
            white: "../pieces/pawn-white.png",  
        }, 
    };

    const iconUrl = imageMap[type][color ? "black" : "white"]
    console.log(`type: ${type}, color: ${color}, iconUrl: ${iconUrl}`);

    return (
        <div className="piece" style={{ backgroundColor: 'transparent' }}>
            <img src={iconUrl} alt={`${type} ${color? "black" : "white"}`}/>
        </div>
    )
}