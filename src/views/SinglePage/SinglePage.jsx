//import data from "../../services/article.json";
import { useParams } from "react-router-dom";
import propTypes from "prop-types";
import { nanoid } from "nanoid";
import Articles from "../../components/Articles/Articles";
import { SectionProjects } from "../ProjectsView/ProjectView.style";

const SinglePage = ({ data }) => {
  const { postName } = useParams();
  const getArticleByTitle = (titleArticle) => {
    const res = data.find(
      (article) => article.title.toLowerCase() === titleArticle.toLowerCase()
    );
    return res;
  };

  const article = getArticleByTitle(postName);

  return (
    <SectionProjects>
      <ul>
        <Articles key={article.id + nanoid(6)} data={article} />
      </ul>
    </SectionProjects>
  );
};

export default SinglePage;

SinglePage.propTypes = {
  data: propTypes.shape({
    id: propTypes.string.isRequired,
    title: propTypes.string,
    date: propTypes.string,
    image: propTypes.string,
    category_id: propTypes.string,
    description: propTypes.string,
    title_block1_content1: propTypes.string,
    block1_content1: propTypes.string,
    title_block1_content2: propTypes.string,
    block1_content2: propTypes.string,
    title_block1_content3: propTypes.string,
    block1_content3: propTypes.string,
    title_block1_content4: propTypes.string,
    block1_content4: propTypes.string,
  }),
};
