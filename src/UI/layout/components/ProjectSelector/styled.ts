import { makeStyles } from "tss-react/mui";
import { Popover, Theme } from "@mui/material";
import { styled } from "@mui/system";
import { Shadows } from "@mui/material/styles/shadows";

export const PopoverStyled = styled(Popover)(({ theme }) => {
  return {
    root: {
      borderRadius: 0,
      marginLeft: 1,
    },
    paper: {
      borderRadius: "0px 0px 4px 4px",
      transform: "translateY(0)",
      transition: "transform 0.2s ease-out, opacity 0.2s ease-out",
      opacity: 1,
      boxShadow: (theme.shadows as Shadows)[1],
    },
  };
});

export const Root = styled("div")(({ theme }) => ({
  position: "relative",
  minWidth: 300,
  height: "100%",
  borderRightWidth: 1,
  borderRightStyle: "solid",
  borderRightColor: theme.palette.grey[200],
  display: "flex",
  zIndex: 1000,
}));

export const CurrentProject = styled("button")(({ theme }) => ({
  padding: theme.spacing(0, 4),
  justifySelf: "flex-end",
  width: "100%",
  height: "100%",
  fontWeight: "bold",
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  userSelect: "none",
  border: 0,
  borderLeftWidth: 1,
  borderLeftStyle: "solid",
  borderLeftColor: theme.palette.grey[200],
  outline: 0,
  backgroundColor: "transparent",
  color: "inherit",
  fontFamily: "inherit",
  fontSize: "inherit",
  textTransform: "inherit",
  textAlign: "left",
}));

export const ProjectName = styled("div")`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
`;

export const ProjectIcon = styled("div")(({ theme }) => ({
  width: 20,
  height: 20,
  color: theme.palette.secondary.main,
}));

export const Popup = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  minWidth: 399,
  borderBottomLeftRadius: theme.shape.borderRadius,
  borderBottomRightRadius: theme.shape.borderRadius,
  borderTopWidth: 3,
  borderTopStyle: "solid",
  borderTopColor: theme.palette.secondary.main,
}));

export const Projects = styled("div")`
  overflow: auto;
  max-height: 220px;
  width: 100%;
`;

export const useProjectSelectorStyles = makeStyles()((theme: Theme) => {
  return {
    popupIcon: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: theme.spacing(4),
      width: 30,
      height: 30,
      color: theme.palette.grey[700],
      "&:hover": {
        color: theme.palette.secondary.main,
      },
      "&> svg": {
        transition: "transform 0.3s ease",
        transform: "rotate(0)",
      },
    },

    openedPopupIcon: {
      "&> svg": {
        transform: "rotate(180deg)",
        color: theme.palette.secondary.main,
      },
    },

    project: {
      display: "flex",
      cursor: "pointer",
      height: 40,
      padding: theme.spacing(0, 4),
      alignItems: "center",
      fontSize: 14,
      borderTopWidth: 1,
      borderTopStyle: "solid",
      borderTopColor: theme.palette.grey[200],
      marginTop: -1,
    },

    selectedProject: {
      fontWeight: "bold",
    },

    loadNewFileButton: {
      height: 50,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textDecoration: "underline",
      cursor: "pointer",
      fontSize: 15,
      color: theme.palette.secondary.main,
      fontWeight: "bold",
      borderTopWidth: 1,
      borderTopStyle: "solid",
      borderTopColor: theme.palette.grey[200],
    },
  };
});
