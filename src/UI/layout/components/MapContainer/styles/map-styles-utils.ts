const onClickCase = (clickProp: any, defaultProp: any) => {
  return [
    "case",
    ["boolean", ["feature-state", "hover"], false],
    clickProp,
    defaultProp,
  ];
};

const onClickCaseWithActive = onClickCase.bind(null, "#0AFDFE");

export { onClickCaseWithActive };
