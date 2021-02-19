import Card from "./shared/Card";
import { PropTypes } from "prop-types";

function FeedbackItem({ item }) {
  return (
    <Card>
      <div className="card__num">{item.rating}</div>
      <div className="card__text">{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
