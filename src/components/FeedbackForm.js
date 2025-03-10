import { useState, useContext, useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelector from "./RatingSelector";

function FeedbackForm() {
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [warning, setWarning] = useState("");

  const { addFeedbackItem, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);
  useEffect(() => {
    if (feedbackEdit.editMode === true) {
      setBtnDisabled(false);
      setContent(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleContentChange = (e) => {
    if (content === "") {
      setBtnDisabled(true);
      setWarning(null);
    } else if (content.length > 0 && content.length < 9) {
      setWarning(`Review must be over 10 characters`);
    } else {
      setBtnDisabled(false);
      setWarning(null);
    }
    setContent(e.target.value);
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    if (content.length > 9) {
      const newFeedback = {
        text: content,
        rating,
      };
      if (feedbackEdit.editMode) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedbackItem(newFeedback);
      }

      setContent("");
      setWarning(null);
    }
  };

  return (
    <Card>
      <form onSubmit={handleFeedbackSubmit}>
        <h2>Leave a review to rate your experience:</h2>
        <RatingSelector select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleContentChange}
            type="text"
            placeholder="Write your review here"
            value={content}
          />
          <Button
            isDisabled={btnDisabled}
            buttonType="submit"
            classType="secondary"
          >
            Submit
          </Button>
        </div>
        <div className="warning">{warning}</div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
