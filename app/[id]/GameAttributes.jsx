function GameAttributes({ data }) {
    return (
        <div>
            <div className="border-b-[1px] border-neutral-500 py-3 flex items-center justify-between text-neutral-100">
                <span className="text-neutral-400">Publisher</span>
                <span>{data.pages[0].data.about.publisherAttribution}</span>
            </div>
            <div className="border-b-[1px] border-neutral-500 py-3 flex items-center justify-between text-neutral-100">
                <span className="text-neutral-400">Developer</span>
                <span>{data.pages[0].data.about.developerAttribution}</span>
            </div>
            <div className="border-b-[1px] border-neutral-500  py-3 flex items-center justify-between text-neutral-100">
                <span className="text-neutral-400">Refund Type</span>
                <span>Self-Refundable</span>
            </div>
        </div>
    );
}

export default GameAttributes;
