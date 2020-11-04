export const serverRegister = async (payload) => {
  return fetch(`https://loft-taxi.glitch.me/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  }).then((res) => res.json());
};
