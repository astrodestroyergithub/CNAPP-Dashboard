import './StarRating.scss';

const StarRating = ({ height, width, filledCount, gap }) => {
  const totalStars = 5;

  return (
    <div
      className="card-star-rating"
      style={{ gap: `${gap}px` }}
    >
      {Array.from({ length: totalStars }).map((_, i) => (
        <svg
          key={i}
          width={width}
          height={height}
          viewBox="0 0 24 24"
          className="card-star"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            points="12,2 15,9 22,9 17,14 19,22 12,17 5,22 7,14 2,9 9,9"
            className={`card-star-polygon ${i < Math.round(filledCount) ? "filled" : "empty"}`}
          />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;
