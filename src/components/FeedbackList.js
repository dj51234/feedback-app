import { motion, AnimatePresence } from "framer-motion";
import FeedbackItem from "./FeedbackItem";
import { PropTypes } from "prop-types";

function FeedbackList({ feedback, removeFeedbackItem }) {
  if (!feedback || feedback.length === 0) {
    return <p>No ratings yet</p>;
  }
  return (
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

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default FeedbackList;
