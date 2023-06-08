import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import { palette } from "../../../../theme/palette";
import { Card } from "@mui/material";
export const Element = styled("div")(({ theme }) => ({
  fontSize: 12,
  lineHeight: "16px",
  color: theme.palette.grey.A700,
  marginBottom: theme.spacing(4),
  "&:last-child": {
    marginBottom: 0,
  },
}));

export const Title = styled(Typography)`
  font-weight: 600;
  text-transform: uppercase;
`;

export const Entity = styled("div")`
  width: 20px;
  height: 16px;
  display: flex;
  align-items: center;
`;
export const TitleLegend = styled("div")`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: ${palette.grey[700]};
`;

export const CardStyled = styled(Card)<{
  "is-slim"?: number;
}>(({ theme, "is-slim": slim }) => ({
  marginLeft: theme.spacing(4),
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.12)",
  borderRadius: 6,
  height: `calc(60% - ${theme.spacing(3)})`,
  maxHeight: 390,
  width: slim ? 178 : 240,
  pointerEvents: "all",
  overflowY: "auto",
  "& .MuiCardContent-root:last-child": {
    padding: theme.spacing(2, 4),
  },
}));

export const PrintColor = styled("div")`
  min-width: 24px;
  width: 24px;
  height: 4px;
  margin-right: 7px;
  margin-top: 7px;
  border-radius: 8px;
`;
export const LegendRow = styled("div")`
  display: flex;
  align-items: flex-start;
`;
