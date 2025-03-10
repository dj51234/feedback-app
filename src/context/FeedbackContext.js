import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FeedbackData from "../data/FeedbackData";
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    editMode: false,
  });

  const removeFeedbackItem = (id) => {
    if (window.confirm("Are you sure?")) {
      setFeedback(feedback.filter((feedbackItem) => feedbackItem.id !== id));
    }
  };

  const addFeedbackItem = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const editFeedback = (item) => {
    setFeedbackEdit({ item, editMode: true });
  };

  const updateFeedback = (id, updatedItem) => {
    setFeedback(
      feedback.map((item) => {
        if (item.id === id) {
          return { item, ...updatedItem };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        removeFeedbackItem,
        addFeedbackItem,
        editFeedback,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
