function GameAttributes({ data }) {
    //Obviusly this isnt the right way to do this if this was in a real prod setting. Since this is just a personal project, im going to cut some lines here and there
    const { publisherAttribution, developerAttribution } = data.pages[0].data.about;

    return (
        <div>
            <div className="border-b-[1px] border-neutral-500 py-3 flex items-center justify-between text-neutral-100">
                <span className="text-neutral-400">Publisher</span>
                <span>{publisherAttribution}</span>
            </div>
            <div className="border-b-[1px] border-neutral-500 py-3 flex items-center justify-between text-neutral-100">
                <span className="text-neutral-400">Developer</span>
                <span>{developerAttribution}</span>
            </div>
            <div className="border-b-[1px] border-neutral-500  py-3 flex items-center justify-between text-neutral-100">
                <span className="text-neutral-400">Refund Type</span>
                <span>Self-Refundable</span>
            </div>
        </div>
    );
}

export default GameAttributes;
