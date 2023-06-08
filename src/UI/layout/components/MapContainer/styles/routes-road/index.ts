import {
  STYLES_ROUTES_ROAD_BY_BASIC,
  STYLES_ROUTES_ROAD_BY_INTER_CORR,
  STYLES_ROUTES_ROAD_BY_LANES,
  STYLES_ROUTES_ROAD_BY_SPEED,
  STYLES_ROUTES_ROAD_BY_STATUS,
  STYLES_ROUTES_ROAD_BY_TOLL_ROAD,
  STYLES_ROUTES_ROAD_BY_TYPE,
} from "./routes-road-sub-styles";

const stylesMap: Map<
  string,
  { layout: Record<string, any>; paint: Record<string, any> }
> = new Map();
stylesMap.set("type", STYLES_ROUTES_ROAD_BY_TYPE);
stylesMap.set("lanes", STYLES_ROUTES_ROAD_BY_LANES);
stylesMap.set("toll_road", STYLES_ROUTES_ROAD_BY_TOLL_ROAD);
stylesMap.set("status", STYLES_ROUTES_ROAD_BY_STATUS);
stylesMap.set("speed", STYLES_ROUTES_ROAD_BY_SPEED);
stylesMap.set("basic", STYLES_ROUTES_ROAD_BY_BASIC);
stylesMap.set("inter_corr", STYLES_ROUTES_ROAD_BY_INTER_CORR);

export { stylesMap as ROAD_ROUTES_SUB_LAYERS_STYLES_MAP };
