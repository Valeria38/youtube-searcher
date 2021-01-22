export const getQueryString = (params) => {
  return Object.entries(params).reduce((total, [key, value], index) => {
    if (key === "pageToken" && !value) return total;
    return total + `${index === 0 ? "" : "&&"}${key}=${value}`;
  }, "");
};
