import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import Card from "./shared/Card";
import { FaTimes } from "react-icons/fa";

function FeedbackItem({ item, reverse }) {
  const { removeFeedbackItem } = useContext(FeedbackContext);
  return (
    <Card>
      <div className="card__num">{item.rating}</div>
      <button className="remove">
        <FaTimes
          onClick={() => removeFeedbackItem(item.id)}
          className={reverse ? "white" : "purple"}
        />
      </button>
      <div className="card__text">{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;
