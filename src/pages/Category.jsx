import { useParams, Link } from "react-router-dom";
import { cards } from "../data/cards";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import PageWrapper from "../components/PageWrapper";

function Category() {
  const { categoryId } = useParams();
  const filteredCards = cards.filter((c) => c.category === categoryId);

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
        انتخاب کارت
      </Typography>

      {filteredCards.map((card) => (
        <Link key={card.id} to={`/build/${card.id}`} style={{textDecoration:"none"}} >
          <Card
            sx={{
              width: "300px",
              borderRadius: 3,
              transition: "transform 0.2s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "translateY(-3px)",
                boxShadow: "0 8px 20px rgba(0,0,0,0.5)",
              },
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                width="200"
                image={card.background}
                alt="yalda"
              />
              <CardContent>
                <Typography variant="h6" textAlign={"center"}>
                  {card.title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      ))}
      </Box>
    </PageWrapper>
  );
}

export default Category;
