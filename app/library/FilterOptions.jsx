function FilterOptions() {
    return (
        <>
            <h3 className="inline text-neutral-400">Sort by:</h3>
            <select className="bg-transparent pl-4 text-white mb-10">
                <option>Alphabetical A-Z</option>
                <option>Recently Added</option>
            </select>
        </>
    );
}

export default FilterOptions;
