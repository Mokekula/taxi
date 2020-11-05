export const serverCard = async (card) => {
  return fetch("https://loft-taxi.glitch.me/card", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(card),
  }).then((res) => res.json());
};

export const serverGetCard = (token) => {
  console.log(token);
  return fetch(`https://loft-taxi.glitch.me/card?token=${token}`)
    .then((res) => res.json())
    .catch((error) => console.error(error));
};
