import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelector from "./RatingSelector";

function FeedbackForm() {
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [warning, setWarning] = useState(`Review must be over 10 characters`);

  const handleContentChange = (e) => {
    if (content === "") {
      setBtnDisabled(true);
      setWarning(warning);
    } else if (content.length > 0 && content.length < 9) {
      setWarning(warning);
    } else {
      setBtnDisabled(false);
      setWarning(null);
    }
    setContent(e.target.value);
  };
  return (
    <Card>
      <form action="">
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
        <div>{warning}</div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
