import { palette } from "./palette";

export const ffOxygen = ["Oxygen", "SourceSansPro", "sans-serif"].join(", ");
export const ffSourceSansPro = ["SourceSansPro", "sans-serif"].join(", ");

export const typography = {
  fontSize: 14,
  fontFamily: ffSourceSansPro,
  allVariants: {
    color: palette.text.primary,
  },
  body1: {
    fontSize: 14,
  },
  h4: {
    fontWeight: 600,
    fontSize: 17,
    lineHeight: 1.3,
  },
  h5: {
    fontSize: 16,
    lineHeight: 1.5,
    fontWeight: 600,
    color: palette.grey[800],
  },
  h6: {
    fontWeight: 600,
    fontSize: 14,
    lineHeight: 1.25,
    color: palette.grey[700],
  },
  subtitle1: {
    fontWeight: "bold",
    fontSize: 14,
  },
  subtitle2: {
    fontWeight: 400,
    fontSize: 14,
  },
};
