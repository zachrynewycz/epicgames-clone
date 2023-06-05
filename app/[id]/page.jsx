"use client";
import { useParams } from "next/navigation";
import fetchGameData from "../api/fetchGameData";
import Screenshots from "./Screenshots";
import Sidebar from "./Sidebar";

function GamePage() {
    const { id } = useParams();
    const data = fetchGameData(id);

    return (
        <div className="grid grid-cols-4 gap-16">
            <div className="col-span-3 ">
                <h1 className="text-white text-4xl mb-8">{data.productName}</h1>
                <Screenshots
                    images={data.pages[0].data.carousel.items}
                    backgroundImage={data.pages[0].data.hero.backgroundImageUrl}
                />
                <p className="text-white mt-10 text-xl">{data.pages[0].data.about.shortDescription}</p>
            </div>

            <Sidebar data={data} />
        </div>
    );
}

export default GamePage;
