import { onClickCaseWithActive } from "../map-styles-utils";

export const STYLES_ROUTES_ROAD_BY_TYPE = {
  layout: { "line-cap": "round", "line-join": "round" },
  paint: {
    "line-color": [
      "match",
      ["downcase", ["get", "type"]],
      ["федеральные"],
      onClickCaseWithActive("#d95b1c"),
      ["региональные"],
      onClickCaseWithActive("#6fa588"),
      ["местные"],
      onClickCaseWithActive("#262f6d"),
      ["переправа"],
      onClickCaseWithActive("#33baeb"),
      ["зарубежные"],
      onClickCaseWithActive("#e7a946"),
      onClickCaseWithActive("#000000"),
    ],
    "line-width": [
      "match",
      ["downcase", ["get", "type"]],
      ["местные", "региональные"],
      2.9, // 0.9
      3.2, // 1.2
    ],
    "line-opacity": [
      "interpolate",
      ["linear"],
      ["zoom"],
      0,
      [
        "match",
        ["downcase", ["get", "type"]],
        ["зарубежные", "федеральные", "переправа"],
        1,
        0,
      ],
      4,
      [
        "match",
        ["downcase", ["get", "type"]],
        ["", "зарубежные", "федеральные", "переправа"],
        1,
        0,
      ],
      4.5,
      1,
      22,
      1,
    ],
  },
};

export const STYLES_ROUTES_ROAD_BY_LANES = {
  layout: { "line-cap": "round", "line-join": "round" },
  paint: {
    "line-color": [
      "match",
      ["get", "lanes"],
      [1],
      onClickCaseWithActive("hsl(309, 88%, 60%)"),
      [2],
      onClickCaseWithActive("hsl(185, 57%, 69%)"),
      [3],
      onClickCaseWithActive("hsl(202, 79%, 48%)"),
      [4],
      onClickCaseWithActive("hsl(232, 68%, 46%)"),
      [5],
      onClickCaseWithActive("hsl(280, 78%, 51%)"),
      [6],
      onClickCaseWithActive("hsl(68, 69%, 43%)"),
      [8],
      onClickCaseWithActive("hsl(27, 88%, 56%)"),
      [10],
      onClickCaseWithActive("hsl(0, 100%, 42%)"),
      0,
      onClickCaseWithActive("#6fa588"),
      onClickCaseWithActive("#000000"),
    ],
    "line-width": 2.2, // 1.2
  },
};

export const STYLES_ROUTES_ROAD_BY_TOLL_ROAD = {
  layout: { "line-cap": "round", "line-join": "round" },
  paint: {
    "line-color": [
      "case",
      ["==", ["get", "toll_road"], true],
      onClickCaseWithActive("hsl(0, 88%, 51%)"),
      onClickCaseWithActive("#6fa588"),
    ],
    "line-width": 2.2, // 1.2
  },
};

export const STYLES_ROUTES_ROAD_BY_STATUS = {
  layout: { "line-cap": "round", "line-join": "round" },
  paint: {
    "line-color": [
      "match",
      ["downcase", ["get", "status"]],
      ["функционирует"],
      onClickCaseWithActive("#6fa588"),
      ["строится"],
      onClickCaseWithActive("#f73802"),
      ["планируется строительство"],
      onClickCaseWithActive("hsl(13, 98%, 49%)"),
      ["планируется реконструкция"],
      onClickCaseWithActive("hsl(223, 84%, 31%)"),
      onClickCaseWithActive("#000000"),
    ],
    "line-width": [
      "match",
      ["downcase", ["get", "status"]],
      ["функционирует"],
      2.9, // 0.9
      ["строится", "планируется строительство", "планируется реконструкция"],
      3.5, // 1.5
      3, // 1
    ],
    "line-dasharray": [
      "match",
      ["downcase", ["get", "status"]],
      ["планируется строительство", "планируется реконструкция"],
      ["literal", [2, 2]],
      ["literal", [1, 0]],
    ],
  },
};

export const STYLES_ROUTES_ROAD_BY_SPEED = {
  layout: { "line-cap": "round", "line-join": "round" },
  paint: {
    "line-color": [
      "match",
      ["get", "speed"],
      30,
      onClickCaseWithActive("hsl(240, 63%, 35%)"),
      40,
      onClickCaseWithActive("hsl(204, 79%, 38%)"),
      50,
      onClickCaseWithActive("hsl(174, 71%, 44%)"),
      60,
      onClickCaseWithActive("hsl(99, 65%, 41%)"),
      70,
      onClickCaseWithActive("hsl(84, 63%, 57%)"),
      80,
      onClickCaseWithActive("hsl(59, 78%, 49%)"),
      90,
      onClickCaseWithActive("hsl(41, 86%, 61%)"),
      100,
      onClickCaseWithActive("hsl(30, 91%, 49%)"),
      110,
      onClickCaseWithActive("hsl(13, 81%, 51%)"),
      120,
      onClickCaseWithActive("hsl(3, 93%, 45%)"),
      130,
      onClickCaseWithActive("hsl(0, 88%, 36%)"),
      140,
      onClickCaseWithActive("hsl(0, 88%, 22%)"),
      onClickCaseWithActive("#000000"),
    ],
    "line-width": 2.2, // 1.2
  },
};

export const STYLES_ROUTES_ROAD_BY_BASIC = {
  layout: { "line-cap": "round", "line-join": "round" },
  paint: {
    "line-color": [
      "match",
      ["get", "basic"],
      ["участки I кат. (опорный каркас 1 уровня)"],
      onClickCaseWithActive("#d95b1c"),
      [
        "участки, планируемые к строительству/реконструкции до I кат. (опорный каркас 1 уровня)",
      ],
      onClickCaseWithActive("#e7a946"),
      [
        "участки, соединяющие соседние региональные центры (опорный каркас 2 уровня)",
      ],
      onClickCaseWithActive("hsl(196, 64%, 30%)"),
      ["0"],
      onClickCaseWithActive("#6fa588"),
      onClickCaseWithActive("#000000"),
    ],
    "line-width": ["match", ["get", "basic"], ["-"], 2.8, 3.4], // 0.8, 1.4
    "line-opacity": [
      "interpolate",
      ["linear"],
      ["zoom"],
      0,
      1,
      4,
      [
        "match",
        ["get", "basic"],
        [
          "участки, планируемые к строительству/реконструкции до I кат. (опорный каркас 1 уровня)",
          "участки, соединяющие соседние региональные центры (опорный каркас 2 уровня)",
          "участки I кат. (опорный каркас 1 уровня)",
        ],
        1,
        0,
      ],
      4.5,
      1,
      22,
      1,
    ],
  },
};

export const STYLES_ROUTES_ROAD_BY_INTER_CORR = {
  layout: { "line-cap": "round", "line-join": "round" },
  paint: {
    "line-color": [
      "match",
      ["get", "inter_corr"],
      ["Азово-Черноморский бассейн"],
      onClickCaseWithActive("#1c922a"),
      ["Запад - Восток"],
      onClickCaseWithActive("#cd4c86"),
      ["Север - Юг"],
      onClickCaseWithActive("#090d86"),
      ["Север - Юг, Восточный маршрут"],
      onClickCaseWithActive("#3ec9d0"),
      ["Север - Юг, Западный маршрут"],
      onClickCaseWithActive("#52a0a7"),
      ["Север - Юг, Транскаспийский маршрут"],
      onClickCaseWithActive("#c87f19"),
      ["0"],
      onClickCaseWithActive("hsl(0,13%, 70%)"),
      onClickCaseWithActive("white"),
    ],
    "line-width": ["match", ["get", "inter_corr"], ["0"], 2.5, 3], // 0.5, 1
  },
};
