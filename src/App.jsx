import { useState } from "react"
import { Square } from "./components/Square"
import { turns } from "./constants"
import { checkWinnerFrom, checkEndGame } from "./logics/logics"
import confetti from "canvas-confetti"
import { Modal } from "./components/Modal"
import Points from "./components/Points"


function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(turns.x)
  const [winner, setWinner] = useState(null)
  const [start,setStart] = useState(false)
  const [count, setCount] = useState({
    player1: 0,
    player2:0
  })
  const [players, setPlayers] = useState({
    player1: "",
    player2:""
  })


  // actualizar el tablero
  const updateBoard = (index) => {
    if (board[index] || winner) return
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard);
    setTurn(turn === turns.x ? turns.o : turns.x)
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      if (newWinner === '❌') {
        setCount({ ...count, player1: count.player1 + 1 })
      } else if (newWinner === '⚪') {
        setCount({ ...count, player2: count.player2 + 1 })
      }
      confetti()
      setWinner(newWinner)
    }else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  // resetear juego
  const reset = () => {
    setBoard(Array(9).fill(null))
    setTurn(turns.x)
    setWinner(null)
  }

  const handleImputChange = (event) => {
    const { name, value } = event.target
    setPlayers({
        ...players,
        [name]: value
    })
  }
  const handleForm = (event) => {
    event.preventDefault()
    if (players.player1!=="" && players.player2!=="") setStart(true)
  }

 
    return (
      start === false
        ? (         
          <section className="start">
            <h1>
              <span style={{color:"yellow"}}>
                Ta
              </span>
              <span style={{color:"red"}}>
                Te
              </span>
              <span style={{color:"blue"}}>
                Ti
              </span>
            </h1>
            <form onSubmit={handleForm}>
              <label >Player 1</label>
                <input
                    type="text"
                    name="player1"
                    value={players.player1}
                    onChange={handleImputChange}
                />
                <label >Player 2</label>
                <input
                    type="text"
                    name="player2"
                    value={players.player2}
                    onChange={handleImputChange}
                />
              <button onClick={handleForm} type="submit">Comenzar a jugar</button>
            </form>
        </section>
      )
      : (
      <main className="board">
        <h1>
          <span style={{color:"yellow"}}>
            Ta
          </span>
          <span style={{color:"red"}}>
            Te
          </span>
          <span style={{color:"blue"}}>
            Ti
          </span>
        </h1>
        <button onClick={reset}>Empezar de nuevo</button>
        <section className="game">
          {
            board.map((square, index) => {
              return (
                <Square
                  key={index}
                  index={index}
                  updateBoard={updateBoard}
                >
                  {square}
                </Square>
              )
            })
          }
        </section>

        <section className="turn">
          <Square isSelected={turn === turns.x}>
            {turns.x}
          </Square>
          <Square isSelected={turn === turns.o}>
            {turns.o}
          </Square>
        </section>

        {/* modal que aparece al finalizar el juego */}
        {winner === null ? "" : <Modal winner={winner} reset={reset} />}
          <Points players={players} turn={turn} points={count}/> 
      </main>  
      )
    )
}

export default App
