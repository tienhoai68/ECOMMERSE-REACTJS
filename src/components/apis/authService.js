import axiosClient from './axiosClient';

const register = async (body) => {
  return await axiosClient.post('/register', body);
};

const login = async (body) => {
  return await axiosClient.post('/login', body);
};
const getInfo = async () => {
  return await axiosClient.get(
    '/user/info/62eb547f-9e4d-4bac-8006-d94e6cd1d973'
  );
};

export { register, login, getInfo };
