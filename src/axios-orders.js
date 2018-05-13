import axios from 'axios';

const orders = axios.create({
  baseURL: 'https://react-burger-builder-85a2b.firebaseio.com/'
});

export default orders;