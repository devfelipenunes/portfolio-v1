import TechnologiesContainer from "./TechnologiesContainer";
import ProjectsContainer from "./ProjectsContainer";

import "../styles/components/maincontent.sass";

const MainContent = () => {
  return (
    <main id="main-content">
      
      <TechnologiesContainer />
      <ProjectsContainer />
    </main>
  );
};

export default MainContent;