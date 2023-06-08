import { IRoadFeature } from "./interfaces";
import {
  DEFAULT_FINISH_YEAR,
  DEFAULT_SPEED_VALUE,
  DEFAULT_START_YEAR,
} from "./utils";
import { SelectChangeEvent } from "@mui/material";
import { speedsMap } from "./constants";

export const getSpeed = (feature: IRoadFeature): number => {
  const speedsMap = new Map<number, number>(
    JSON.parse(localStorage.getItem("savedSpeeds") as string)
  );
  const savedSpeed = speedsMap.get(feature.id);

  const validatedSpeed =
    feature.properties.speed &&
    [DEFAULT_SPEED_VALUE, 110, 130].includes(feature.properties.speed)
      ? feature.properties.speed
      : 90;

  return savedSpeed ? savedSpeed : validatedSpeed;
};
export const onSpeedChange =
  (feature: IRoadFeature, setSpeed: (speed: number) => void) =>
  (event: SelectChangeEvent) => {
    speedsMap.set(feature.id, Number(event.target.value));
    localStorage.setItem(
      "savedSpeeds",
      JSON.stringify(Array.from(speedsMap.entries()))
    );

    setSpeed(Number(event.target.value));
  };
export const getStartYear = (feature: IRoadFeature): number => {
  const startYear = feature.properties.date_start ?? 0;

  return startYear;
};
export const getFinishYear = (feature: IRoadFeature): number => {
  const finishYear = feature.properties.date_end ?? 0;

  return finishYear;
};
export const getConstructionCost = (feature: IRoadFeature): number => {
  const constructionCost = feature.properties.constract_price ?? 0;

  return constructionCost;
};
export const getForecastIntensity = (feature: IRoadFeature): number => {
  const forecastIntensity = feature.properties.planed_intensity ?? 0;

  return forecastIntensity;
};
