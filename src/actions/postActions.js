import { FETCH_POSTS, DELETE_POST, NEW_POST } from './types';
import axios from 'axios';
export const fetchPosts = ()=> async dispatch => {
    const res = await axios.get
    ('http://localhost:8888/alllinks');
    
    dispatch({
        type: FETCH_POSTS,
        payload: res.data
    });
}

export const deletePost = hashedUrl => async dispatch =>{
    
    await axios.delete
    (`http://localhost:8888/v1/deletelink/${hashedUrl}`);
    
    dispatch({
        type: DELETE_POST,
        payload: hashedUrl
    });
}

export const newPost = post => async dispatch =>{
    
    const res = await axios.post(
        'http://localhost:8888/v1/links',
        post
    )
    
    dispatch({
        type: NEW_POST,
        payload: res.data
    });
}
