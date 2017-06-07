import { FETCH_POSTS, FETCH_POST } from '../actions';
import posts from '../../src/dummy';
console.log(posts);

const INITIAL_STATE = {
  posts: posts,
  post: null
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_POST:
      return {
        ...state,
        post: action.payload.data
      }
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.payload.data
      }
    default:
      return state
  }
}
