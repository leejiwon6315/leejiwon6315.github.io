export const dataBase = {};
export let nextId = Object.keys(dataBase).length;
export const setNextId = () => {
  nextId++;
};
