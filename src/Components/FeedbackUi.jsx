import { useState } from "react";

function FeedbackUi() {
  const [rating, setRating] = useState(6);
  const [text, setText] = useState("Dummy Text");

  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
    </div>
  );
}

export default FeedbackUi;
