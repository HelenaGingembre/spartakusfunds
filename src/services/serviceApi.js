import initialArticles from "./article.json";

const articles = () => initialArticles || [];

export const getArticles = () => {
  return articles;
};

export const getArticleById = (articleId) => {
  const data = getArticles();

  const res = data.find((article) => article.id === articleId);
  return res;
};
