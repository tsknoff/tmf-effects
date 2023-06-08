import { styled } from "@mui/system";
import { makeStyles } from "tss-react/mui";
import { Theme } from "@mui/material";
import { ffOxygen } from "../../../theme/typography";

//export const useStyles = makeStyles()(({ palette, spacing }: Theme) => ({
export const useHeaderMenuStyles = makeStyles()((theme: Theme) => {
  return {
    popupIcon: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: theme.spacing(4),
      width: 30,
      height: 30,
      color: "#797979",
      "&> svg": {
        transition: "transform .3s ease",
        transform: "rotate(0)",
      },
      "&:hover": {
        color: theme.palette.secondary.main,
      },
    },

    openedPopupIcon: {
      "&> svg": {
        transform: "rotate(180deg)",
        color: theme.palette.secondary.main,
      },
    },
  };
});

export const Root = styled("div")({
  position: "relative",
  cursor: "pointer",
  height: "100%",
  userSelect: "none",
  fontFamily: ffOxygen,
});

export const ProgressWrap = styled("div")`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const Popup = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  borderTopStyle: "solid",
  borderTopColor: theme.palette.secondary.main,
  borderTopWidth: 3,
  minWidth: "199px",
  fontFamily: ffOxygen,
}));

export const PopupItem = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(5),
  cursor: "pointer",
}));

export const PopupItemIcon = styled("div")(({ theme }) => ({
  marginRight: theme.spacing(4),
  width: 20,
  height: 20,
}));

export const SvgWrapper = styled("div")`
  order: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  flex-shrink: 0;
`;

export const ButtonStyled = styled("button")({
  display: "flex",
  alignItems: "center",
  height: "100%",
  minWidth: 150,
  border: 0,
  outline: 0,
  backgroundColor: "transparent",
  cursor: "pointer",
});

export const Username = styled("div")`
  margin-right: auto;
`;
