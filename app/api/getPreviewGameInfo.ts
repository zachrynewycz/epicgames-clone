import games from "./game_data.json";

const getPreviewGameInfo = (name: string) => {
    return games[name as keyof typeof games];
};

export default getPreviewGameInfo;
