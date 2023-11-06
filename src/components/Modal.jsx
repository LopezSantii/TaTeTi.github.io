import { Square } from "./Square"

export const Modal = ({ winner, reset }) => {
    // revisa si hay un ganador o es empate y se depliega
    if (winner === null) return null
    return (
       <section className="winner">
            <div className="text">
              <h2>
                {
                  winner === false
                    ? "Empate"
                    : "Gano :"
                }
              </h2>
              <header className="win">
                {winner && <Square>{winner}</Square>}
              </header>
              <footer>
                <button onClick={reset}>Empezar de nuevo</button>
              </footer>
            </div>
          </section> 
    )
}