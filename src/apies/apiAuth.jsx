export const serverLogin = async (payload) => {
  return fetch(`https://loft-taxi.glitch.me/auth`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  }).then((res) => res.json());
};
