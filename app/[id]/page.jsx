"use client";
import { useParams } from "next/navigation";
import fetchGameData from "../api/fetchGameData";
import Nav from "../components/nav/Nav";
import Screenshots from "./Screenshots";
import Sidebar from "./Sidebar";
import Ratings from "./Ratings";

function GamePage() {
    const { id } = useParams();
    const data = fetchGameData(id);

    return (
        <>
            <Nav />

            <div className="grid grid-cols-7 gap-16">
                <div className="col-span-5 ">
                    <h1 className="text-white text-5xl mb-3">{data.productName}</h1>
                    <Ratings />

                    <Screenshots
                        images={data.pages[0].data.carousel.items}
                        backgroundImage={data.pages[0].data.hero.backgroundImageUrl}
                    />
                    <p className="text-white mt-10 text-xl">{data.pages[0].data.about.shortDescription}</p>
                </div>

                <Sidebar data={data} />
            </div>
        </>
    );
}

export default GamePage;
