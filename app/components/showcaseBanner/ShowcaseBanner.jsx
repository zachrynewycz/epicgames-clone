import { useEffect, useState } from "react";
import SmallPreview from "./SmallPreview";
import LargePreview from "./LargePreview";
import fetchGameData from "../../api/fetchGameData";

const GAMES_TO_SHOWCASE = ["it-takes-two", "the-outlast-trials", "dead-by-daylight", "days-gone", "goat-simulator-3"];

function ShowcaseBanner() {
    const [gameData, setGameData] = useState([]);
    const [selectedGame, setSelectedGame] = useState(fetchGameData(GAMES_TO_SHOWCASE[0]));

    useEffect(() => {
        setGameData(GAMES_TO_SHOWCASE.map((game) => fetchGameData(game)));
    }, []);

    return (
        <div className="grid grid-cols-5 my-5 gap-5">
            <LargePreview game={selectedGame} />

            <div>
                {gameData.map((game) => (
                    <SmallPreview key={game._id} gameData={game} setSelectedGame={setSelectedGame} />
                ))}
            </div>
        </div>
    );
}

export default ShowcaseBanner;
