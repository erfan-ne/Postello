import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
import { Link } from "react-router-dom";

function CategoryCard({ category }) {
  return (
    <>
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
        <CardActionArea component={Link} to={`/category/${category.id}`}>
          <CardMedia
            component="img"
            height="200"
            width="200"
            image={category.cover}
            alt="green iguana"
          />
          <CardContent>
            <Typography variant="h6" textAlign={"center"}>
              {category.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}

export default CategoryCard;
