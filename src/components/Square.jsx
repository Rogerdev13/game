import './square.css'


export const Square = ({onClick , value , turn , winner}) =>{
   
    const handleClick = () =>{
        (turn !== null && value === null) && onClick()
    }

    return(
        <div  className={`square ${value !== null  ? `square--${value}  ` : ''} ${winner ? 'iswinner' : ''} `} onClick={()=> handleClick()}>

        </div>
    )
}