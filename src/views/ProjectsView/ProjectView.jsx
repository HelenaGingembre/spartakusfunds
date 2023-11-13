import Projects from "../../components/Projects";

import data from "../../services/article.json";
import { SectionProjects } from "./ProjectView.style";

function ProjectsView() {
  return (
    <SectionProjects>
      <Projects projects={data} />
    </SectionProjects>
  );
}

export default ProjectsView;
