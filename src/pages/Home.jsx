import { cardCategories } from "../data/categories";
import CategoryCard from "../components/CategoryCard";
import { Typography } from "@mui/material";

function Home() {
  return (
    <div className="container">
      <Typography>کارت پستال‌های مناسبتی</Typography>

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
