import initialArticles from "./article.json";

const articles = () => initialArticles || [];

export const getArticles = () => {
  console.log("getArticles API--->", articles);
  return articles;
};

export const getArticleById = (articleId) => {
  const data = getArticles();
  console.log("getArticleById--->", data);
  const res = data.find((article) => article.id === articleId);
  return res;
};
// export const getArticleByTitle = (articleTitle) => {
//   const data = getArticles();
//   console.log("getArticleByTitle--->", data);
//   const res = data.find(
//     (article) => article.title === articleTitle.toLowerCase()
//   );
//   return res;
// };
