import Projects from "../../components/Projects";

import data from "../../services/article.json";

function ProjectsView() {
  return (
    <section>
      <Projects projects={data} />
    </section>
  );
}

export default ProjectsView;
