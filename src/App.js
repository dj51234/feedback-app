import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import { useState } from "react";
import FeedbackData from "./data/FeedbackData";
import FeedbackItem from "./components/FeedbackItem";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const removeClick = (id) => {
    if (window.confirm("Are you sure?")) {
      setFeedback(
        feedback.filter((feedbackitem) => {
          return FeedbackItem.id !== id;
        })
      );
    }
  };
  return (
    <>
      <Header logo="Feedback App" />
      <div className="container">
        <FeedbackList feedback={feedback} removeClick={removeClick} />
      </div>
    </>
  );
}

export default App;
