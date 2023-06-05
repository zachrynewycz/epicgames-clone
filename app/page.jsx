"use client";
import MegaSaleSpotlight from "./components/MegaSaleSpotlight";
import ThreeGameSpotlight from "./components/ThreeGameSpotlight";
import ShowcaseBanner from "./components/showcaseBanner/ShowcaseBanner";
import Footer from "./components/Footer";
import Nav from "./components/nav/Nav";

export default function HomePage() {
    return (
        <>
            <Nav />
            <ShowcaseBanner />
            <MegaSaleSpotlight />
            <ThreeGameSpotlight />
            <Footer />
        </>
    );
}
