import { Root, CurrentProject, ProjectName } from "./styled";

export const ProjectSelector = () => (
  <Root>
    <CurrentProject data-testid="suggester-open-btn">
      <ProjectName data-testid="project-label">
        Демонстрационный проект
      </ProjectName>
    </CurrentProject>
  </Root>
);
