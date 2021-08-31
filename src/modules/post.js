import { createAction, handleActions } from 'redux-actions';
import { applyPenders } from 'redux-pender';
import axios from 'axios';

function getPostAPI(postId) {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
}

const GET_POST = 'GET_POST';

export const getPost = createAction(GET_POST, getPostAPI);

const initialState = { 
    post: {
        title: "",
        body: ""
    }
}

const reducer = handleActions({
    // ... some other action handlers...
}, initialState);

export default applyPenders(reducer, [
    {
        type: GET_POST,
        onPending: (state, action) => {
            return state; // do something
        },
        onSuccess: (state, action) => {
            return {
                post: action.payload.data
            }
        },
        onFailure: (state, action) => {
            return state; // do something
        }
    }
])