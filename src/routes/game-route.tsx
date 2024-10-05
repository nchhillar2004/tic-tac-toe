import GameBoard from "../components/game-board";

export default function GameRoute(){
    return(
        <div>
            <h1 className="lg:text-4xl text-3xl max-md:text-2xl font-bold">Gamming Page</h1>
            <GameBoard/>
        </div>
    );    
}
