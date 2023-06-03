import GameCard from "./GameCard";

function MegaSaleSpotlight() {
    return (
        <div className="my-20">
            <h1 className="text-xl text-white mb-5 pl-2 ">MEGA Sale Spotlight</h1>

            <div className="grid grid-cols-5 gap-5">
                <GameCard game="grand-theft-auto-v" />
                <GameCard game="fifa-23" />
                <GameCard game="red-dead-redemption-2" />
                <GameCard game="dead-space" />
                <GameCard game="cyberpunk-2077" />
            </div>
        </div>
    );
}

export default MegaSaleSpotlight;
