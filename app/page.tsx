import { Provider } from "react-redux";
import { store } from "./store/store";
import MegaSaleSpotlight from "./components/MegaSaleSpotlight";
import ThreeGameSpotlight from "./components/ThreeGameSpotlight";

export default function Home() {
    return (
        <main>
            <Provider store={store}>
                <MegaSaleSpotlight />
                <ThreeGameSpotlight />
            </Provider>
        </main>
    );
}
