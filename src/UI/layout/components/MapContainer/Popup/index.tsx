import React, { FC, useEffect, useState } from "react";
import { Dialog, MenuItem, Select, TextField } from "@mui/material";
import useStyles from "./styles";
import {
  calcBudgetEffects,
  calcGDPEffects,
  DEFAULT_CONSTRUCTION_COST,
  DEFAULT_FINISH_YEAR,
  DEFAULT_INTENSITY,
  DEFAULT_MAX_YEAR,
  DEFAULT_MIN_YEAR,
  DEFAULT_SPEED_VALUE,
  DEFAULT_START_YEAR,
} from "./utils";
import {
  getConstructionCost,
  getFinishYear,
  getForecastIntensity,
  getSpeed,
  getStartYear,
  onSpeedChange,
} from "./functions";
import { IMapPopupProps } from "./interfaces";

export const MapPopup: FC<IMapPopupProps> = (props) => {
  const { open, feature, onClose } = props;

  const { classes } = useStyles();

  const [speed, setSpeed] = useState<number>(getSpeed(feature));
  const [startYear, setStartYear] = useState<number>(getStartYear(feature));
  const [finishYear, setFinishYear] = useState<number>(getFinishYear(feature));
  const [constructionCost, setConstructionCost] = useState<number>(
    getConstructionCost(feature)
  ); // 1278.6
  const [forecastIntensity, setForecastIntensity] = useState<number>(
    getForecastIntensity(feature)
  );

  const [GDPEffects, setGDPEffects] = useState<number>(
    calcGDPEffects(speed, constructionCost, forecastIntensity)
  );

  const [budgetEffects, setBudgetEffects] = useState<number>(
    calcBudgetEffects(speed, constructionCost, forecastIntensity)
  );

  useEffect(() => {
    setGDPEffects(calcGDPEffects(speed, constructionCost, forecastIntensity));
    setBudgetEffects(
      calcBudgetEffects(speed, constructionCost, forecastIntensity)
    );
  }, [speed, constructionCost, forecastIntensity]);

  return (
    <Dialog open={open} onClose={onClose}>
      <div className={classes.root}>
        <div key={"name"} className={classes.row}>
          <div className={classes.desc}>Код трассы</div>{" "}
          <div className={classes.value}>{feature.properties.name}</div>
        </div>

        <div key={"route"} className={classes.row}>
          <div className={classes.desc}>Участок</div>{" "}
          <div className={classes.value}>{feature.properties.route}</div>
        </div>

        <div key={"country"} className={classes.row}>
          <div className={classes.desc}>Страна</div>{" "}
          <div className={classes.value}>{feature.properties.country}</div>
        </div>

        <div key={"definition"} className={classes.row}>
          <div className={classes.desc}>Значение</div>{" "}
          <div className={classes.value}>{feature.properties.type}</div>
        </div>

        <div key={"lanes"} className={classes.row}>
          <div className={classes.desc}>Количество полос движения</div>{" "}
          <div className={classes.value}>{feature.properties.lanes}</div>
        </div>

        <div key={"max-speed"} className={classes.row}>
          <div className={classes.desc}>
            Максимально разрешенная скорость (км/ч)
          </div>{" "}
          <Select
            size="small"
            className={classes.value}
            value={String(speed)}
            onChange={onSpeedChange(feature, setSpeed)}
          >
            <MenuItem value={DEFAULT_SPEED_VALUE}>90</MenuItem>
            <MenuItem value={110}>110</MenuItem>
            <MenuItem value={130}>130</MenuItem>
          </Select>
        </div>

        <div key={"inter-transport-bridge"} className={classes.row}>
          <div className={classes.desc}>Международный транспортный коридор</div>{" "}
          <div className={classes.value}>{feature.properties.inter_corr}</div>
        </div>

        <div key={"basic-web"} className={classes.row}>
          <div className={classes.desc}>Опорная сеть</div>{" "}
          <div className={classes.value}>{feature.properties.basic}</div>
        </div>

        <div key={"payment"} className={classes.row}>
          <div className={classes.desc}>Платность</div>{" "}
          <div className={classes.value}>{feature.properties.payment}</div>
        </div>

        <div key={"status"} className={classes.row}>
          <div className={classes.desc}>Статус</div>{" "}
          <div className={classes.value}>{feature.properties.status}</div>
        </div>

        {speed &&
          startYear !== 0 &&
          finishYear !== 0 &&
          constructionCost !== 0 &&
          forecastIntensity !== 0 && (
            <>
              <div key={"start-year"} className={classes.row}>
                <div className={classes.desc}>
                  Начало реализации проекта (год)
                </div>{" "}
                <TextField
                  type="number"
                  inputProps={{
                    min: DEFAULT_MIN_YEAR,
                    max: DEFAULT_MAX_YEAR,
                  }}
                  size="small"
                  className={classes.value}
                  value={startYear}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    const newValue = Number(event.target.value);
                    setStartYear(newValue == 0 ? DEFAULT_START_YEAR : newValue);
                  }}
                ></TextField>
              </div>

              <div key={"finish-year"} className={classes.row}>
                <div className={classes.desc}>
                  Окончание реализации проекта (год)
                </div>{" "}
                <TextField
                  type="number"
                  inputProps={{
                    min: DEFAULT_MIN_YEAR,
                    max: DEFAULT_MAX_YEAR,
                  }}
                  size="small"
                  className={classes.value}
                  value={finishYear}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    const newValue = Number(event.target.value);
                    setFinishYear(
                      newValue == 0 ? DEFAULT_FINISH_YEAR : newValue
                    );
                  }}
                ></TextField>
              </div>

              <div key={"construction-сost"} className={classes.row}>
                <div className={classes.desc}>
                  Стоимость строительства (млрд руб.)
                </div>{" "}
                <TextField
                  type="number"
                  inputProps={{
                    min: 0.1,
                  }}
                  size="small"
                  className={classes.value}
                  value={constructionCost}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    const newValue = Number(event.target.value);
                    setConstructionCost(
                      newValue == 0 ? DEFAULT_CONSTRUCTION_COST : newValue
                    );
                  }}
                ></TextField>
              </div>

              <div key={"forecast-intensity"} className={classes.row}>
                <div className={classes.desc}>
                  Прогнозная интенсивность (авто в сутки)
                </div>{" "}
                <TextField
                  type="number"
                  inputProps={{
                    min: 4000,
                    max: 40000,
                  }}
                  size="small"
                  className={classes.value}
                  value={forecastIntensity}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    const newValue = Number(event.target.value);
                    setForecastIntensity(
                      newValue == 0 ? DEFAULT_INTENSITY : newValue
                    );
                  }}
                ></TextField>
              </div>

              <div key={"gdp-effects"} className={classes.row}>
                <div className={classes.desc}>Эффекты для ВВП (млрд руб.)</div>{" "}
                <div className={classes.value}>{GDPEffects.toFixed(1)}</div>
              </div>

              <div key={"budget-effects"} className={classes.row}>
                <div className={classes.desc}>
                  Бюджетные эффекты (млрд руб.)
                </div>{" "}
                <div className={classes.value}>{budgetEffects.toFixed(1)}</div>
              </div>
            </>
          )}
      </div>
    </Dialog>
  );
};
