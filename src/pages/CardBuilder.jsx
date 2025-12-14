import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { cards } from "../data/cards";
import { animations } from "../data/animations";
import Lottie from "lottie-react";
import {
  Box,
  Grid,
  TextField,
  Button,
  Typography,
  Paper
} from "@mui/material";
import { motion } from "framer-motion";

function CardBuilder() {
  const { cardId } = useParams();
  const navigate = useNavigate();

  const card = cards.find(c => c.id === cardId);

  if (!card) {
    return <Typography>کارت مورد نظر یافت نشد</Typography>;
  }

  const [form, setForm] = useState({
    receiver: "",
    sender: ""
  });

  const handleChange = e => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const isDisabled = !form.receiver || !form.sender;

  const handleCreate = () => {
    const uniqueId = Date.now().toString();

    localStorage.setItem(
      `card-${uniqueId}`,
      JSON.stringify({ ...form, cardId })
    );

    navigate(`/card/${uniqueId}`);
  };

  return (
    <Box sx={{ px: 2, py: 4 }}>
      <Grid container spacing={4} alignItems="center">
        {/* Preview */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Paper
              elevation={6}
              sx={{
                position: "relative",
                borderRadius: 4,
                overflow: "hidden",
                aspectRatio: "3 / 4"
              }}
            >
              <img
                src={card.background}
                alt={card.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />

              <Lottie
                animationData={animations[card.lottie]}
                loop
                style={{
                  position: "absolute",
                  inset: 0
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  bottom: 24,
                  width: "100%",
                  textAlign: "center",
                  color: "#fff",
                  textShadow: "0 2px 6px rgba(0,0,0,0.5)"
                }}
              >
                <Typography variant="h6">{form.receiver}</Typography>
                <Typography variant="subtitle1">
                  {form.sender}
                </Typography>
              </Box>
            </Paper>
          </motion.div>
        </Grid>

        {/* Form */}
        <Grid item xs={12} md={6}>
          <Paper elevation={4} sx={{ p: 4, borderRadius: 4 }}>
            <Typography variant="h5" mb={3}>
              شخصی‌سازی کارت
            </Typography>

            <TextField
              fullWidth
              label="نام گیرنده"
              name="receiver"
              value={form.receiver}
              onChange={handleChange}
              margin="normal"
            />

            <TextField
              fullWidth
              label="نام فرستنده"
              name="sender"
              value={form.sender}
              onChange={handleChange}
              margin="normal"
            />

            <Button
              fullWidth
              variant="contained"
              color="secondary"
              size="large"
              sx={{ mt: 3 }}
              disabled={isDisabled}
              onClick={handleCreate}
            >
              ساخت کارت
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CardBuilder;