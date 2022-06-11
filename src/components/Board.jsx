import { Square } from "./Square"
import './board.css'
import { Score } from "./Score/Score"

export const Board = ({ scoreO , scoreX , functionButton , activeButton ,  squares , onClick , turn , winPositions}) =>{

    const createSquares = values =>(values.map(value => {
        return <Square winner = {winPositions.includes(value)} turn={turn} onClick={()=> onClick(value)} key={value} value={squares[value]} />
    }))
        
    

    return (

            <div className="board">
                <div className="row">
                    {createSquares([0, 1, 2])}
                </div>
                <div className="row">
                    {createSquares([3, 4, 5])}
                </div>
                <div className="row">
                    {createSquares([6, 7, 8])}
                </div>
                <Score scoreO ={scoreO} scoreX={scoreX} ></Score>
                <button onClick={functionButton} className={activeButton ? 'buttonRestart--active' : 'buttonRestart' }>PLAY AGAIN</button>
            </div>
        
    
    )
}