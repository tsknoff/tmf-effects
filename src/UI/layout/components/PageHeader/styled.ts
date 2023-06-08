import { styled } from "@mui/system";
import { HEIGHT_HEADER } from "../../../theme/constants";
import { ffOxygen } from "../../../theme/typography";

export const Header = styled("header")(({ theme }) => ({
  height: `${HEIGHT_HEADER}px`,
  display: "flex",
  alignItems: "center",
  paddingRight: theme.spacing(5),
  boxShadow: "0 2px 4px rgb(0 0 0 / 10%)",
  position: "relative",
  zIndex: 2,
  "& *": {
    fontFamily: ffOxygen,
  },
}));
