import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../../actions/asyncAction";
class User extends Component {
    state = {
        id: [],
    };
    componentDidMount() {
        if (this.state.id.length > 0) {
            if (this.state.id.find((id) => id === this.props.id) === -1) {
                console.log("ok");
                this.setState({ id: [...this.state.id, this.props.id] });
                this.props.fetchUser(this.props.id);
            }
        } else {
            this.setState({ id: [...this.state.id, this.props.id] });
            this.props.fetchUser(this.props.id);
        }
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
