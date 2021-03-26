import { createContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import FeedbackData from "../data/FeedbackData";
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    editMode: false,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getFeedback();
  }, []);

  const getFeedback = async () => {
    const res = await fetch("/feedback?_sort=id&_order=desc");
    const data = await res.json();
    setFeedback(data);
    setIsLoading(false);
  };

  const removeFeedbackItem = async (id) => {
    if (window.confirm("Are you sure?")) {
      await fetch(`/feedback/${id}`, { method: "DELETE" });
      setFeedback(feedback.filter((feedbackItem) => feedbackItem.id !== id));
    }
  };

  const addFeedbackItem = async (newFeedback) => {
    const res = await fetch("/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });
    const data = await res.json();

    setFeedback([data, ...feedback]);
  };

  const editFeedback = (item) => {
    setFeedbackEdit({ item, editMode: true });
  };

  const updateFeedback = async (id, updatedItem) => {
    const res = await fetch(`/feedback/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedItem),
    });

    const data = await res.json();

    setFeedback(
      feedback.map((item) => {
        if (item.id === id) {
          return { item, ...data };
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
        isLoading,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
