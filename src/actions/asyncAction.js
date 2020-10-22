import jsonplaceholder from "../api/jsonPlaceHolder";

const fetchPosts = () => {
    return {
        type: "FETCH_POSTS",
    };
};
export const fetchPostsAsync = async () => {
    const response = await jsonplaceholder.get("/posts");
    console.log(response);
    return (dispatch, getState) => {
        dispatch(fetchPosts(response.data));
    };
};
