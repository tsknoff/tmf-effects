import { makeStyles } from "tss-react/mui";
import { Theme } from "@mui/material";

export default makeStyles()(({ palette }: Theme) => ({
  root: {
    width: 500,
    padding: 24,
    paddingBottom: 12,
    fontSize: 14,
    fontWeight: "normal",
  },

  name: {
    fontSize: 16,
    lineHeight: "20px",
    fontWeight: "bold",
    marginBottom: 8,
  },

  row: {
    paddingTop: 8,
    paddingBottom: 6,
    paddingLeft: 8,
    paddingRight: 8,
    borderBottom: `solid 1px ${palette.grey[600]}`,
    display: "flex",
    alignItems: "center",
  },

  desc: {
    flexBasis: "50%",
    paddingRight: 16,
  },

  value: {
    fontWeight: "bold",
    flexBasis: "50%",
  },

  stopId: {
    marginTop: 8,
    fontSize: 10,
    textAlign: "right",
    color: palette.grey[600],
  },
}));
