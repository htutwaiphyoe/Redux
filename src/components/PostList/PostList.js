import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../actions/asyncAction";
import Post from "./Post/Post";
class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    show() {
        if (this.props.posts.length === 0) {
            return <div>Loading...</div>;
        }
        return (
            <div className="ui divided list relaxed">
                {this.props.posts.map((post) => (
                    <Post post={post} key={post.id} />
                ))}
            </div>
        );
    }
    render() {
        return this.show();
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
    };
};
const mapDispatchToProps = {
    fetchPosts: actionCreators.fetchPosts,
};
export default connect(mapStateToProps, mapDispatchToProps)(PostList);
