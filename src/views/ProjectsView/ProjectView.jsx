import Projects from "../../components/Projects";
import propTypes from "prop-types";

import { SectionProjects } from "./ProjectView.style";

const ProjectsView = ({ data }) => {
  return (
    <SectionProjects>
      <Projects projects={data} />
    </SectionProjects>
  );
};

export default ProjectsView;

ProjectsView.propTypes = {
  data: propTypes.arrayOf(
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
