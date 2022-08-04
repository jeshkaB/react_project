import StarRatings from "react-star-ratings/build/star-ratings";

function StarsRating({rating}) {

   return (
        <div>
            <StarRatings
                rating={rating/2}
                starRatedColor="sandybrown"
                starEmptyColor = "darkgrey"
                numberOfStars={5}
                name='rating'
                starDimension = '20px'
                starSpacing='2px'
            />
        </div>
    );
}

export {StarsRating}