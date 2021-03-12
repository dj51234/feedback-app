import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";

function FeedbackForm() {
  const [content, setContent] = useState("");
  const handleContentChange = (e) => {
    setContent(e.target.value);
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
          <Button buttonType="submit" classType="secondary">
            Submit
          </Button>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
