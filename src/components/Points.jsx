export default function Points({players,points}) {
    return (
        <section className="points">
            <h2>
                {players.player1} : {points.player1}
            </h2>
            <h2>
                {players.player2} : {points.player2}
            </h2>
        </section>
    )
}