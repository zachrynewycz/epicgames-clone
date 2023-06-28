function Prices({ price, accentColor }) {
    return (
        <>
            {price.sale ? (
                <div className="flex gap-3 text-sm text-white items-center">
                    <h1
                        style={{ backgroundColor: accentColor }}
                        className="px-3 py-1 rounded-md text-xs bg-neutral-800"
                    >
                        -{price.salePercent}%
                    </h1>
                    <s className="text-neutral-400">${price.current}</s>
                    <h1>${price.salePrice}</h1>
                </div>
            ) : (
                <h1 className="text-white">{price.current === "0" ? "Free" : `$${price.current}`}</h1>
            )}
        </>
    );
}

export default Prices;
