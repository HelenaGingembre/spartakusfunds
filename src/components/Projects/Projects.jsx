import propTypes from "prop-types";

import Articles from "../Articles/Articles";

const Projects = ({ projects }) => {
  return (
    <ul>
      {projects
        // .filter((item) => item.category_id === "1")
        .map((item) => (
          <Articles key={item.id} data={item} />
        ))}
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
