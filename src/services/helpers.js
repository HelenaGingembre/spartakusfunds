export const getCategory = (itemCategory) => {
  const result = itemCategory === "2" ? "/projects/" : "/market/";

  return result;
};
