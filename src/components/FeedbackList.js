import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";
import Spinner from "./shared/Spinner";

function FeedbackList() {
  const { feedback, removeFeedbackItem, isLoading } =
    useContext(FeedbackContext);
  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No ratings yet</p>;
  }
  return isLoading ? (
    <Spinner />
  ) : (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => {
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeedbackItem
                key={item.id}
                item={item}
                removeFeedbackItem={removeFeedbackItem}
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

export default FeedbackList;
