export const getQueryString = (params) => {
  return Object.entries(params).reduce((total, [key, value]) => {
    if (key === "pageToken" && !value) return total;
    return total + `&${key}=${value}`;
  }, "");
};
