import { useEffect, useState } from "react"

import * as gameService from '../../services/gameService'
import GameListItem from "./GameListItem/GameListItem"

export default function GameList() {
  const [games, setGames] = useState([])
useEffect(() => {
gameService.getAll()
.then(result => setGames(result))
}, [])

    return(

<section id="catalog-page">
  <h1>All Games</h1>

  {games.map(game => (
    <GameListItem key={game._id} {...game}/> // does the action for all games
  ))}  

  {games.length === 0 &&
   (<h3 className="no-articles">No articles yet</h3>
   )}

  
</section>
    )
}