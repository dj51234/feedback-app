import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";

function App() {
  return (
    <>
      <Header logo="Feedback App" />
      <div className="container">
        <FeedbackItem />
      </div>
    </>
  );
}

export default App;
