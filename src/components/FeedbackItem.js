function FeedbackItem({ item }) {
  return (
    <div className="card">
      <div className="card__num">{item.rating}</div>
      <div className="card__text">{item.text}</div>
    </div>
  );
}

export default FeedbackItem;
