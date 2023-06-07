import StarRatings from "react-star-ratings";

function Ratings() {
    const randomRating = Math.random() * (5 - 3.5) + 3.5;

    return (
        <div className="flex items-center gap-2 mb-10">
            <StarRatings
                rating={randomRating}
                starRatedColor="white"
                starEmptyColor="gray"
                starDimension="16px"
                starSpacing="1px"
            />
            <div className="text-neutral-300 text-sm font-bold bg-neutral-800 px-3 py-1 rounded-md">
                {randomRating.toFixed(1)}
            </div>
        </div>
    );
}

export default Ratings;
