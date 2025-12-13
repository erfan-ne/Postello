import { useParams, Link } from "react-router-dom";
import { cards } from "../data/cards";

function Category() {
  const { categoryId } = useParams();
  const filteredCards = cards.filter(c => c.category === categoryId);

  return (
    <div className="container">
      <h2>انتخاب کارت</h2>

      <div className="grid">
        {filteredCards.map(card => (
          <Link key={card.id} to={`/build/${card.id}`}>
            <div className="card-item">
              <img src={card.background} />
              <p>{card.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Category;
