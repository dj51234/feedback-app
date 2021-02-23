import FeedbackItem from "./FeedbackItem";
import { PropTypes } from "prop-types";

function FeedbackList({ feedback, removeFeedbackItem }) {
  if (!feedback || feedback.length === 0) {
    return <p>No ratings yet</p>;
  }
  return (
    <div className="feedback-list">
      {feedback.map((item) => {
        return (
          <FeedbackItem
            key={item.id}
            item={item}
            removeFeedbackItem={removeFeedbackItem}
          />
        );
      })}
    </div>
  );
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default FeedbackList;
