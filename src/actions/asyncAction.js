import jsonplaceholder from "../api/jsonPlaceHolder";

let ids = [];
export const fetchPosts = () => async (dispatch) => {
    const response = await jsonplaceholder.get("/posts");
    dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
    if (!ids.includes(id)) {
        ids.push(id);
        const response = await jsonplaceholder.get(`/users/${id}`);
        dispatch({ type: "FETCH_USER", payload: response.data });
    }
};
