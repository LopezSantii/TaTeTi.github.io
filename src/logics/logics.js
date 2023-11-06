import { winner_combos } from "../constants"

export const checkWinnerFrom = (boardToCheck) => {
// revisamos todas las combinaciones ganadoras
// para ver si X u O ganó
for (const combo of winner_combos) {
  const [a, b, c] = combo
  if (
    boardToCheck[a] &&
    boardToCheck[a] === boardToCheck[b] &&
    boardToCheck[a] === boardToCheck[c]
  ) {
    return boardToCheck[a]
  }
}
// si no hay ganador
return null
}

  // ver si hay empate
export const checkEndGame = (newBoard) => {
    // chequea todas las posiciones del array y si no hay ninguna en null es que el juego termino en empate
  return newBoard.every((square) => square !== null)
  }
