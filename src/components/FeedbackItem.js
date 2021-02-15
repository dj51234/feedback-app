import { useState } from "react";

function FeedbackItem() {
  const [ratingScore, setRatingScore] = useState(7);
  const [ratingText, setRatingText] = useState(
    "This will be a feedback text for rating"
  );
  return (
    <div className="card">
      <div className="card__num">{ratingScore}</div>
      <div className="card__text">{ratingText}</div>
    </div>
  );
}

export default FeedbackItem;
