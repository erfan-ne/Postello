import {
  Box,
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
      <Card sx={{ width: "30%", maxWidth:"400px" }}>
        <CardActionArea component={Link} to={`/category/${category.id}`}>
          <CardMedia
            component="img"
            height="200"
            width="200"
            image={category.cover}
            alt="green iguana"
          />
          <CardContent>
            <Typography variant="h6" component="div">
              {category.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}

export default CategoryCard;
