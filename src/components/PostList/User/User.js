import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../../actions/asyncAction";
class User extends Component {
    componentDidMount() {
        this.props.fetchUser(this.props.id);
    }
    show() {
        const { user } = this.props;
        if (!user) {
            return <div>Loading...</div>;
        }
        return <h1>{user.name}</h1>;
    }
    render() {
        return this.show();
    }
}

// Can access redux state and Component props
const mapStateToProps = (state, props) => {
    const user = state.users.find((u) => u.id === props.id);

    return {
        user,
    };
};
const mapDispatchToProps = {
    fetchUser: actionCreators.fetchUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(User);
