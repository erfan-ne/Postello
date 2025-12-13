import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { cards } from "../data/cards";
import { animations } from "../data/animations";
import Lottie from "lottie-react";

function CardBuilder() {
  const { cardId } = useParams();
  const navigate = useNavigate();

  const card = cards.find(c => c.id === cardId);

  const [form, setForm] = useState({
    receiver: "",
    sender: ""
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCreate = () => {
    const uniqueId = Date.now().toString();
    localStorage.setItem(
      `card-${uniqueId}`,
      JSON.stringify({ ...form, cardId })
    );
    navigate(`/card/${uniqueId}`);
  };

  return (
    <div className="builder">
      <div className="preview">
        <img src={card.background} className="bg" />

        <Lottie
          animationData={animations[card.lottie]}
          className="lottie"
          loop
        />

        <div className="text-overlay">
          <p>{form.receiver}</p>
          <p>{form.sender}</p>
        </div>
      </div>

      <div className="form">
        <input
          name="receiver"
          placeholder="نام گیرنده"
          onChange={handleChange}
        />
        <input
          name="sender"
          placeholder="نام فرستنده"
          onChange={handleChange}
        />

        <button onClick={handleCreate}>ساخت کارت</button>
      </div>
    </div>
  );
}

export default CardBuilder;
