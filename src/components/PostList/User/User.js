import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../../actions/asyncAction";
class User extends Component {
    componentDidMount() {
        this.props.fetchUser(this.props.id);
    }
    show() {
        if (!this.props.user) {
            return <h1>Loading</h1>;
        }
        return <h1>{this.props.user.username}</h1>;
    }
    render() {
        return this.show();
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};
const mapDispatchToProps = {
    fetchUser: actionCreators.fetchUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(User);
