import { useParams } from "react-router-dom";
import { cards } from "../data/cards";
import { animations } from "../data/animations";
import Lottie from "lottie-react";
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import TelegramIcon from "@mui/icons-material/Telegram";
import { IconButton } from "@mui/material";

function CardViewer() {
  const { id } = useParams();
  const saved = JSON.parse(localStorage.getItem(`card-${id}`));

  if (!saved) return <p>کارت یافت نشد</p>;

  const card = cards.find((c) => c.id === saved.cardId);

  return (
    <div className="viewer">
      <div className="preview">
        <img src={card.background} className="bg" />

        <Lottie
          animationData={animations[card.lottie]}
          className="lottie"
          loop
          autoplay
        />

        <div className="text-overlay">
          <p>{saved.receiver}</p>
          <p>{saved.sender}</p>
        </div>
      </div>
      <IconButton
        onClick={() =>
          window.open(`https://wa.me/?text=${encodeURIComponent(cardUrl)}`)
        }
      >
        <WhatsAppIcon />
      </IconButton>

      <IconButton
        onClick={() =>
          window.open(
            `https://t.me/share/url?url=${encodeURIComponent(cardUrl)}`
          )
        }
      >
        <TelegramIcon />
      </IconButton>
    </div>
  );
}

export default CardViewer;
