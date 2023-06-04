"use client";
import { Provider } from "react-redux";
import store from "./store/store";
import MegaSaleSpotlight from "./components/MegaSaleSpotlight";
import ThreeGameSpotlight from "./components/ThreeGameSpotlight";
import ShowcaseBanner from "./components/showcaseBanner/ShowcaseBanner";

export default function Home() {
    return (
        <main>
            <Provider store={store}>
                <ShowcaseBanner />
                <MegaSaleSpotlight />
                <ThreeGameSpotlight />
            </Provider>
        </main>
    );
}
