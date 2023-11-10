import propTypes from "prop-types";
import { nanoid } from "nanoid";

import Articles from "../Articles/Articles";

const Projects = ({ projects }) => {
  return (
    <ul>
      {projects.length > 0 ? (
        projects
          .filter((item) => item.category_id === "2")
          .map((item) => <Articles key={item.id + nanoid(6)} data={item} />)
      ) : (
        <h4>There are no articles yet</h4>
      )}
    </ul>
  );
};

Projects.propTypes = {
  projects: propTypes.arrayOf(
    propTypes.shape({
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
    })
  ),
};

export default Projects;
