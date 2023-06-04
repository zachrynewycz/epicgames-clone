import games from "./game_data.json";

const fetchGameData = (name) => {
    return games[name];
};

export default fetchGameData;
