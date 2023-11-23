import { turns } from "../constants"

export default function Points({ players, points, turn }) {
    return (
        <section className="points">
            <h2 className={turn === turns.x ? "turno" : ""}>
                {players.player1} {turns.x} : {points.player1}
            </h2>
            <h2 className={turn === turns.o ? "turno" : ""}>
                {players.player2} {turns.o}: {points.player2}
            </h2>
        </section>
    )
}