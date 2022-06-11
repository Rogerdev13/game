import './Score.css'
export const Score = ({scoreO , scoreX}) => (
    <div className="scoreContainer">
        <div className='score--x'>{scoreX}</div>
        <div className="score--o">{scoreO}</div>
    </div>
)

