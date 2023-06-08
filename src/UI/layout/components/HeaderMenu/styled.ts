import { styled } from "@mui/system";
import { makeStyles } from "tss-react/mui";
import { Theme } from "@mui/material";
import { ffOxygen } from "../../../theme/typography";

export const NavStyled = styled("nav")`
  height: 100%;
  display: flex;
  align-items: center;
  margin-right: auto;
`;

export const HeaderMenuStyled = styled("div")`
  height: 100%;
`;

export const LinkContent = styled("div")(({ theme }) => ({
  display: "flex",
  height: "100%",
  width: "100%",
  padding: theme.spacing(0, 5),
  fontSize: 16,
  fontFamily: ffOxygen,
  fontWeight: 600,
  alignItems: "center",
  textAlign: "center",
  color: "#666666",
}));

export const useStyles = makeStyles()((theme: Theme) => ({
  url: {
    display: "flex",
    transition: "none",
    height: "100%",
    width: "100%",
    color: theme.palette.grey[700],

    "&:hover": {
      backgroundColor: theme.palette.grey[50],
    },

    "& div, & a": {
      transition: "none",
      fontWeight: 400,
    },
  },

  active: {
    position: "relative",
    color: theme.palette.common.black,
    fontWeight: "bold",

    "& div, & a": {
      transition: "none",
      fontWeight: 600,
    },

    "&::after": {
      content: '""',
      position: "absolute",
      bottom: -1,
      left: "0",
      right: "0",
      backgroundColor: theme.palette.secondary.main,
      height: 3,
    },
  },
}));
