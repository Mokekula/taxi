// export const REGISTR_IN = "REGISTR_IN";
export const REGISTRATION = "REGISTRATION";

// export const registrIn = () => ({
//   type: REGISTR_IN,
// });

export const registration = (email, password, name, surname) => ({
  type: REGISTRATION,
  payload: { email, password, name, surname },
});
