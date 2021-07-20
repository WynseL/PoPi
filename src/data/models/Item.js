export const itemValue = {
  id: "",
  name: "",
  type: "",
  subtype: "",
  description: "",
  buyValue: 0.0,
  sellValue: 0.0,
  recipe: [],
  info: {},
  photo: ""
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
    info,
    photo: jsonItem.photo
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

// for d3 tree data
export const convertToTree = (item, amount) => {
  let children = [];
  item.recipe.forEach((recipe) => {
    let newItem = convertToTree(recipe.item, recipe.amount);
    children.push(newItem);
  });
  console.log(item);
  const info = item.info;
  if ("equipment" in info) {
    const equipment = {
      name: item.info.equipment.name,
      attributes: item.info.equipment,
      children: children
    };

    return {
      name: item.name,
      attributes: { ...item, amount: amount },
      children: [equipment]
    };
  }
  return { name: item.name, attributes: { ...item, amount: amount }, children };
};

//
export const baseRawMaterials = (item) => {
  let baseMaterials = [];
  item.children.forEach((childrenItem) => {
    const newItem = childrenItem.attributes;
    const amount = newItem.amount;

    if (childrenItem.children.length !== 0) {
      baseMaterials = [...baseMaterials, ...baseRawMaterials(childrenItem)];
    } else {
      baseMaterials.push({ item: newItem, amount: amount });
    }
  });

  return baseMaterials;
};

export const rawMaterials = (item) => {
  let materials = [];
  const baseMaterials = baseRawMaterials(item);
  baseMaterials.forEach((material) => {
    const exists =
      materials.findIndex((m) => m.item.id === material.item.id) !== -1;
    if (!exists) {
      const filter = baseMaterials.filter(
        (mat) => material.item.id === mat.item.id
      );
      const amount = filter.reduce((prev, cur) => prev + cur.amount, 0);
      materials.push({ item: material.item, amount: amount });
    }
  });

  return materials.sort((a, b) => b.amount - a.amount);
};
