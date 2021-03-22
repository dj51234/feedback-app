import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);

  const ratingSum = feedback.reduce(
    (result, current) => result + current.rating,
    0
  );

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>
        Average Rating: {` `}
        {!isNaN(ratingSum / feedback.length)
          ? (ratingSum / feedback.length).toFixed(1)
          : 0}
      </h4>
    </div>
  );
}

export default FeedbackStats;
