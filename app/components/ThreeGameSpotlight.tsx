import GameCard from "./GameCard";

function ThreeGameSpotlight() {
    return (
        <div className="grid md:grid-cols-3 gap-5 my-28">
            <GameCard showFullImage={true} game="rocket-league" />
            <GameCard showFullImage={true} game="battlefield-2042" />
            <GameCard showFullImage={true} game="goat-simulator-3" />
        </div>
    );
}

export default ThreeGameSpotlight;
