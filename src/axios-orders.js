import axios from 'axios';


const instance = axios.create({
  baseURL: 'https://react-burger-app-c68cc.firebaseio.com/'
});

export default instance;