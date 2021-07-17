export const itemValue = {
  id: "",
  name: "",
  type: "",
  subtype: "",
  description: "",
  buyValue: 0.0,
  sellValue: 0.0,
  recipe: [],
  info: {}
};

export const setItemValue = (jsonItem) => {
  let item = itemValue;
  const recipe = "recipe" in jsonItem ? JSON.parse(jsonItem.recipe) : [];
  const info = "info" in jsonItem ? JSON.parse(jsonItem.info) : {};
  return {
    ...item,
    id: jsonItem.id,
    name: jsonItem.name,
    type: jsonItem.type,
    subtype: jsonItem.subtype,
    description: jsonItem.description,
    buyValue: jsonItem.buyValue,
    sellValue: jsonItem.sellValue,
    recipe,
    info
  };
};

export const printTime = (time) => {
  time = Number(time);
  const hr = Math.floor(time / 3600);
  const min = Math.floor((time % 3600) / 60);
  const sec = Math.floor((time % 3600) % 60);

  const hrDisplay = hr > 0 ? hr + "h" : "";
  const minDisplay = min > 0 ? min + "m" : "";
  const secDisplay = sec > 0 ? sec + "s" : "";
  return hrDisplay + minDisplay + secDisplay;
};
