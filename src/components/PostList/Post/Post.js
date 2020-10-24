import React from "react";
import User from "../User/User";
const Post = (props) => {
    const { title, body, userId } = props.post;
    return (
        <div className="item">
            <i className="large middle aligned icon user" />
            <div className="content">
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
            <User id={userId} />
        </div>
    );
};

export default Post;
