import axios from 'axios';

//Posts actions
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';

const API_URL = 'http://localhost:3001/api';

export const fetchPosts = () => {
  const request = axios.get(`${API_URL}/posts`);
  return {
    type: FETCH_POSTS,
    payload: request
  }
}
