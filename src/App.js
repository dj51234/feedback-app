import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import { useState } from "react";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const removeFeedbackItem = (id) => {
    if (window.confirm("Are you sure?")) {
      setFeedback(feedback.filter((feedbackItem) => feedbackItem.id !== id));
    }
  };
  return (
    <>
      <Header logo="Feedback App" />
      <div className="container">
        <FeedbackForm />
        <FeedbackStats feedback={feedback} />
        <FeedbackList
          feedback={feedback}
          removeFeedbackItem={removeFeedbackItem}
        />
      </div>
    </>
  );
}

export default App;
