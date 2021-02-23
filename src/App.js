import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import { useState } from "react";
import FeedbackData from "./data/FeedbackData";
import FeedbackItem from "./components/FeedbackItem";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const removeFeedbackItem = (id) => {
    if (window.confirm("Are you sure?")) {
      console.log("works");
      setFeedback(
        feedback.filter((feedbackItem) => {
          return feedbackItem.id !== id;
        })
      );
    }
  };
  return (
    <>
      <Header logo="Feedback App" />
      <div className="container">
        <FeedbackList
          feedback={feedback}
          removeFeedbackItem={removeFeedbackItem}
        />
      </div>
    </>
  );
}

export default App;
