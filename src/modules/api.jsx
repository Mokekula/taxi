export const serverLogin = async (username, password) => {
  return fetch(
    `https://loft-taxi.glitch.me/auth?username=${username}&password=${password}`
  )
    .then((res) => res.json())
    .then((data) => data.success);
};
