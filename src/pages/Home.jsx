import { cardCategories } from "../data/categories";
import CategoryCard from "../components/CategoryCard";
import { Box, Typography } from "@mui/material";

function Home() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography
        variant="h1"
        sx={{ fontSize: "2rem", textAlign: "center", fontWeight: "bold" }}
      >
        کارت پستال‌های مناسبتی
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 1,
          justifyContent:"space-around",
          mt:3,
        }}
      >
        {cardCategories.map((cat) => (
          <CategoryCard key={cat.id} category={cat} />
        ))}
      </Box>
    </Box>
  );
}

export default Home;
