import { PropTypes } from "prop-types";

function FeedbackStats({ feedback }) {
  const ratingSum = feedback.reduce(
    (result, current) => result + current.rating,
    0
  );

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>
        Average Rating:
        {!isNaN(ratingSum / feedback.length)
          ? (ratingSum / feedback.length).toFixed(1)
          : 0}
      </h4>
    </div>
  );
}

feedback: PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  })
);

export default FeedbackStats;
