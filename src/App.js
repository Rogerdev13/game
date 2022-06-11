import { useState } from 'react';
import './App.css';
import { Board } from './components/Board';


const winningCombitations = [
  [0 , 1, 2],
  [3 , 4 , 5],
  [6 , 7 , 8 ],
  [0 , 4 , 8] , 
  [2 , 4 , 6],
  [0 , 3 , 6] ,
  [2 , 5 , 8] ,
  [1 , 4 , 7]
]

function App() {
  const [turn , setTurn] = useState('x')
  const [squares , setSquares]  = useState(Array(9).fill(null))
  const [score , setScore]  = useState({
      x :0 ,
      o : 0 ,
  })
  const [buttonActive , setButtonActive ] = useState(false)


  const [winSquares , setWinSquares] = useState([])



    const restartGame = () =>{
      setTurn('x')
      setWinSquares([])
      setSquares(Array(9).fill(null))
      setButtonActive(false)
    }

    const checkWinner = newSquares =>{
      for(let i = 0 ; i < winningCombitations.length; i++){
        const [a, b , c ] = winningCombitations[i]
        if(newSquares[a] && newSquares[a] === newSquares[b] && newSquares[a] === newSquares[c]){
          endGame(newSquares[a] , winningCombitations[i])
          return
        }

        if(!newSquares.includes(null)){
          endGame(null  , Array.from(Array(10).keys()))
        }

    }


    setTurn(turn === 'x' ? 'o' : 'x')
  }

  const handleClick =(currentSquar)=>{
    let newArray = [...squares]
    newArray.splice(currentSquar , 1 , turn )
    setSquares(newArray)
    checkWinner(newArray)
  }


  const  endGame = (result , winningPostiions  )=> {
    setTurn(null)
    console.log('game it is over')

    if(result !== null){
      setScore({
        ...score,
        [result] : score[result] + 1
      })
    }

    setWinSquares(winningPostiions)
    setButtonActive(true)
  }


  return (
    <div className="container">
        <Board scoreO = {score.o} scoreX  = {score.x} functionButton={restartGame} activeButton={buttonActive} winPositions={winSquares} turn={turn} onClick={handleClick} squares={squares}/>
    </div>
  );
}

export default App;
