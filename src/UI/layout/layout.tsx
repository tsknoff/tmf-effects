import { Content, Main, Root } from "./styled";
import { PageHeader } from "./components/PageHeader";
import { FC } from "react";
import { MapContainer } from "./components/MapContainer";

export const Layout: FC<{ children: JSX.Element }> = ({ children }) => (
  <Root>
    <Content>
      <PageHeader />
      <Main>
        <MapContainer />
      </Main>
    </Content>
  </Root>
);
