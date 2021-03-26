import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import Card from "./shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";

function FeedbackItem({ item, reverse }) {
  const { removeFeedbackItem, editFeedback } = useContext(FeedbackContext);
  return (
    <Card>
      <div className="card__num">{item.rating}</div>
      <button className="remove">
        <FaTimes
          color="#222"
          onClick={() => removeFeedbackItem(item.id)}
          className={reverse ? "white" : "#222"}
        />
      </button>
      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit color="#222" />
      </button>
      <div className="card__text">{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;
