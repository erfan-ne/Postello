export const saveCard = async cardData => {
    
  const id = Date.now().toString();
  localStorage.setItem(`card-${id}`, JSON.stringify(cardData));
  return id;
};

export const getCard = async id => {
  return JSON.parse(localStorage.getItem(`card-${id}`));
};
