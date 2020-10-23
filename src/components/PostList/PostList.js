import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../actions/asyncAction";
class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }
    render() {
        return (
            <div>
                <p>Hi React Thunk</p>
            </div>
        );
    }
}
const mapDispatchToProps = {
    fetchPosts: actionCreators.fetchPosts,
};
export default connect(null, mapDispatchToProps)(PostList);
