import axios from 'axios';

// Add base url for instance to axios
const instance = axios.create({
  baseURL: 'https://cercles.herokuapp.com/api',
});

export default instance;
