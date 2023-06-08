import { Header } from "./styled";
import { HeaderMenu } from "../HeaderMenu";
import { HeaderUserMenu } from "../HeaderUserMenu";
import { ProjectSelector } from "../ProjectSelector";

export const PageHeader = () => (
  <Header>
    <HeaderMenu />
    <ProjectSelector />
    <HeaderUserMenu />
  </Header>
);
