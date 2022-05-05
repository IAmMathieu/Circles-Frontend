export const getStorage = (storage) => {
  localStorage.getItem(storage);
};
export const removeStorage = (storage) => {
  localStorage.removeItem(storage);
};
export const setStorage = (storage, val) => {
  localStorage.setItem(storage, val);
};
