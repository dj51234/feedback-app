import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import { useState } from "react";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

import About from "./routes/About";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const removeFeedbackItem = (id) => {
    if (window.confirm("Are you sure?")) {
      setFeedback(feedback.filter((feedbackItem) => feedbackItem.id !== id));
    }
  };
  const addFeedbackItem = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
  return (
    <Router>
      <Header logo="Feedback App" />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm addFeedbackItem={addFeedbackItem} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  removeFeedbackItem={removeFeedbackItem}
                />
              </>
            }
          ></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
