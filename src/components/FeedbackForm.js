import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";

function FeedbackForm() {
  const [content, setContent] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [warning, setWarning] = useState(
    "Review must be at least 10 characters long"
  );

  const handleContentChange = (e) => {
    if (content === "") {
      setBtnDisabled(true);
      setContent(null);
    } else if (content !== "" && content.trim().length < 9) {
      setWarning(warning);
    } else {
      setBtnDisabled(false);
      setWarning("");
    }
    setContent(e.target.value);
    // if (content === "") {
    //   setBtnDisabled(true);
    // } else if (content.trim().length > 0 && content.trim().length < 10) {
    //   setWarning(`Must add ${10 - content.trim().length} more characters`);
    // } else {
    //   setBtnDisabled(false);
    // }
  };
  return (
    <Card>
      <form action="">
        <h2>Leave a review to rate your experience:</h2>
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
