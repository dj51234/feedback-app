import Card from "./shared/Card";
import { PropTypes } from "prop-types";
import { FaTimes } from "react-icons/fa";
import { FeedbackList } from "./FeedbackList";

function FeedbackItem({ item, reverse, removeClick }) {
  return (
    <Card>
      <div className="card__num">{item.rating}</div>
      <button className="remove">
        <FaTimes
          onClick={() => removeClick(item.id)}
          className={reverse ? "white" : "purple"}
        />
      </button>
      <div className="card__text">{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
