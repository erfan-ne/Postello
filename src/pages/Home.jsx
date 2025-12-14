import { cardCategories } from "../data/categories";
import CategoryCard from "../components/CategoryCard";
import { Box, Grid, Typography } from "@mui/material";
import PageWrapper from "../components/PageWrapper";

function Home() {
  return (
    <PageWrapper>
      <Box sx={{ display: "flex", flexDirection: "column", p: 2 }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: "2rem",
            textAlign: "center",
            fontWeight: "bold",
            mt: 2,
            mb: 4,
          }}
        >
          کارت پستال‌های مناسبتی
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {cardCategories.map((cat) => (
            <Grid key={cat.id}>
              <CategoryCard category={cat} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </PageWrapper>
  );
}

export default Home;
