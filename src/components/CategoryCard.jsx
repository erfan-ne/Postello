import { Link } from "react-router-dom";

function CategoryCard({ category }) {
  return (
    <Link to={`/category/${category.id}`}>
      <div className="category-card">
        <img src={category.cover} alt={category.title} />
        <h3>{category.title}</h3>
      </div>
    </Link>
  );
}

export default CategoryCard;