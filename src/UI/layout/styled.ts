import { styled } from "@mui/system";
import { HEIGHT_HEADER } from "../theme/constants";

export const Root = styled("div")({
  position: "relative",
  display: "flex",
  width: "100%",
  height: "100%",
  "& *": {
    fontSize: "inherit",
  },
});

export const Content = styled("div")`
  width: 100%;
  height: 100%;
`;

export const Main = styled("main")(({ theme }) => ({
  height: `calc(100% - ${HEIGHT_HEADER}px)`,
  position: "relative",
  zIndex: 1,
  backgroundColor: theme.palette.grey[50],
  overflow: "hidden",
}));
