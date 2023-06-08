import { useHeaderMenuStyles, Root, Username, ButtonStyled } from "./styled";
import { ChevronDownIcon } from "../../icons/ChevronDownIcon";

export const HeaderUserMenu = () => {
  const { classes } = useHeaderMenuStyles();

  return (
    <Root>
      <ButtonStyled>
        <Username>Пользователь</Username>
        <div className={classes.popupIcon}>
          <ChevronDownIcon />
        </div>
      </ButtonStyled>
    </Root>
  );
};
