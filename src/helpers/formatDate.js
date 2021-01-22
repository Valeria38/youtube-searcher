import { months } from "../constants";

export const formatDate = (date) => {
  const newDate = new Date(date);
  return `${newDate.getDate()} ${
    months[newDate.getMonth()]
  } ${newDate.getFullYear()}`;
};
