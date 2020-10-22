import React from "react";
import { connect } from "react-redux";
import actionCreator from "../../../actions";
const Song = (props) => {
    const { title } = props.song;

    return (
        <div>
            <p>{title}</p>
            <button onClick={() => props.selectSong("SELECT_SONG", props.song)}>Select</button>
        </div>
    );
};

const mapDispatchToProps = {
    selectSong: actionCreator,
};
export default connect(null, mapDispatchToProps)(Song);
