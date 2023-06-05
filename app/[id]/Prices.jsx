function Prices({ data }) {
    return (
        <>
            {data.price.sale ? (
                <div className="flex gap-3 text-sm text-white items-center">
                    <h1
                        style={{ backgroundColor: data.pageTheme.dark.accent }}
                        className="px-3 py-1 rounded-md text-xs bg-neutral-800"
                    >
                        -{data.price.salePercent}%
                    </h1>
                    <s className="text-neutral-400">${data.price.current}</s>
                    <h1>${data.price.salePrice}</h1>
                </div>
            ) : (
                <h1 className="text-white">{data.price.current === "0" ? "Free" : `$${data.price.current}`}</h1>
            )}
        </>
    );
}

export default Prices;
