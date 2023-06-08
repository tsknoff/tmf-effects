import { Box, CardContent } from "@mui/material";
import {
  CardStyled,
  Element,
  LegendRow,
  PrintColor,
  Title,
  TitleLegend,
} from "./styles";

const legendItems = [
  { name: "Федеральные", color: "#d95b1c" },
  { name: "Региональные", color: "#6fa588" },
  { name: "Местные", color: "#262f6d" },
  { name: "Зарубежные", color: "#e7a946" },
  { name: "Переправа", color: "#33baeb" },
];

export const Legend = () => {
  return (
    <Box position="absolute" top={0} right={0} m={2}>
      <CardStyled is-slim={1}>
        <CardContent>
          <Element>
            <Title variant="inherit">Автомобильные дороги</Title>
            <div>
              <TitleLegend>по значению</TitleLegend>
              <div>
                {legendItems.map((item, index) => (
                  <LegendRow key={item.name}>
                    <PrintColor style={{ backgroundColor: item.color }} />
                    <span>{item.name}</span>
                  </LegendRow>
                ))}
              </div>
            </div>
          </Element>
        </CardContent>
      </CardStyled>
    </Box>
  );
};
