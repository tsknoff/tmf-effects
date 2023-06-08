import { useStyles, NavStyled, HeaderMenuStyled, LinkContent } from "./styled";
import { PageNavLink } from "../PageNavLink";

export const HeaderMenu = () => {
  const { classes } = useStyles();

  return (
    <NavStyled>
      <HeaderMenuStyled key={"key"}>
        <PageNavLink
          navKey={"navKey"}
          url={"url"}
          activeClassName={classes.active}
          className={classes.url}
        >
          <a className={classes.active}>
            <LinkContent>Эффекты</LinkContent>
          </a>
        </PageNavLink>
      </HeaderMenuStyled>
    </NavStyled>
  );
};
