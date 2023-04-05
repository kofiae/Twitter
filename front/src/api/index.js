import axios from 'axios';
import config from '../utils/config';
//import { useAuthStore } from '../stores/auth';

//const authStore = useAuthStore();

const api = axios.create({
    baseURL: config.backend_url,
});

const getUsers = () => api.get(`/users`);
const getUsersById = id => api.get(`/users/${id}`);
//const newUser = id => api.delete(`/Sejour/${id}`);
//const updateUserById = (id, payload) => api.put(`/users/${id}`, payload);
const deleteUsersById = id => api.delete(`/Sejour/${id}`);


const getTweets = () => api.get(`/tweets`);
const getTweetsById = id => api.get(`/tweets/${id}`);
const deleteTweetById = id => api.delete(`/tweets/${id}`);
//const newTweet = id => api.delete(`/tweets/${id}`);


const apis = {
    getUsers,
    getUsersById,
    //newUser,
    //updateUserById,
    deleteUsersById,
    getTweets,
    getTweetsById,
    deleteTweetById,
    //newTweet
};

export default apis;