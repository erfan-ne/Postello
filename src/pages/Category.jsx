import { useParams, Link } from "react-router-dom";
import { cards } from "../data/cards";
import { Typography } from "@mui/material";

function Category() {
  const { categoryId } = useParams();
  const filteredCards = cards.filter((c) => c.category === categoryId);

  return (
    <div className="container">
      <h2>انتخاب کارت</h2>

      <div className="grid">
        {filteredCards.map((card) => (
          <Link key={card.id} to={`/build/${card.id}`}>
            <div className="card-item">
              <Typography>{card.title}</Typography>
              <img src={card.background} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Category;
