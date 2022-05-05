export const getStorage = (storage) => {
  return localStorage.getItem(storage);
};
export const removeToken = (storage) => {
  localStorage.removeItem(storage);
};
export const setToken = (storage,val) => {
  localStorage.setItem(storage, val);
};