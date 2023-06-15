"use client";
import Nav from "../components/nav/Nav";

function LibraryPage() {
    return (
        <>
            <Nav />
            <h1 className="text-5xl text-white mb-5">Library</h1>

            <h3 className="inline text-neutral-400">Sort by:</h3>
            <select className="bg-transparent pl-4 text-white">
                <option>Alphabetical A-Z</option>
                <option>Recently Added</option>
            </select>
        </>
    );
}

export default LibraryPage;
