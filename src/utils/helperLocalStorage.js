export const getStorage = (storage) => {
  return localStorage.getItem(storage);
};
export const removeStorage = (storage) => {
  return localStorage.removeItem(storage);
};
export const setStorage = (storage, val) => {
  localStorage.setItem(storage, val);
};
