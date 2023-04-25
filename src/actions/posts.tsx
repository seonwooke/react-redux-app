import axios from "axios";

// export const fetchPosts = (): any => {
//     return async function fetchPostsThunk(dispatch : any, getState : any) {
//         const response = await axios.get("https://jsonplaceholder.typicode.com/posts"); // 1. 데이터 얻어오기
//         dispatch({type: "FETCH_POSTS", payload: response.data}); // 2. 불러온 데이터를 POST 형식으로 가져오기
//     }
// }

export const fetchPosts = (): any => async(dispatch: any, getState: any) => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts"); // 1. 데이터 얻어오기
    dispatch({ type: "FETCH_POSTS", payload: response.data }); // 2. 불러온 데이
}