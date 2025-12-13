import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CardBuilder from "../pages/CardBuilder";
import CardViewer from "../pages/CardViewer";
import Category from "../pages/Category";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/build/:cardId" element={<CardBuilder />} />
      <Route path="/card/:id" element={<CardViewer />} />
      <Route path="/category/:categoryId" element={<Category />} />
    </Routes>
  );
}

export default AppRoutes;