import React from "react";
import { connect } from "react-redux";
import actionCreator from "../../../actions";
import classes from "./Song.module.css";
const Song = (props) => {
    const { title } = props.song;

    return (
        <div className={classes.Song}>
            <p>{title}</p>
            <button onClick={() => props.selectSong("SELECT_SONG", props.song)}>Select</button>
        </div>
    );
};

const mapDispatchToProps = {
    selectSong: actionCreator,
};
export default connect(null, mapDispatchToProps)(Song);
