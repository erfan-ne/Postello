import Lottie from "lottie-react";

function LottiePlayer({ animation }) {
  return (
    <Lottie
      animationData={animation}
      loop
      autoplay
      style={{ width: "100vw", height: "100vh" }}
    />
  );
}

export default LottiePlayer;