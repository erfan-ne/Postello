import { cardCategories } from "../data/categories";
import CategoryCard from "../components/CategoryCard";

function Home() {
  return (
    <div className="container">
      <h1>کارت پستال‌های مناسبتی</h1>

      <div className="grid">
        {cardCategories.map(cat => (
          <>
          <CategoryCard key={cat.id} category={cat} />
          </>
        ))}

      </div>
    </div>
  );
}

export default Home;
