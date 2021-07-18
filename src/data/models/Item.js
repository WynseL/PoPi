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
  const recipe = JSON.parse(jsonItem.recipe);
  const info = JSON.parse(jsonItem.info);
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

export const convertToTree = (item, amount) => {
  let children = [];
  item.recipe.forEach((recipe) => {
    let newItem = convertToTree(recipe.item, recipe.amount);
    children.push(newItem);
  });

  return { name: item.name, attributes: { ...item, amount: amount }, children };
};
