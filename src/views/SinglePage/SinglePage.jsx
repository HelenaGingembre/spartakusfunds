//import data from "../../services/article.json";
import { SectionProjects } from "./ProjectView.style";
import Articles from "../Articles/Articles";
import { nanoid } from "nanoid";

const SinglePage = ({ article }) => {
  return (
    <SectionProjects>
      <Articles key={article.id + nanoid(6)} data={article} />
    </SectionProjects>
  );
};

export default SinglePage;
