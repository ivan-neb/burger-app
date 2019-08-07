import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-app-628f6.firebaseio.com/',
});

export default instance;
