import React from "react";
import { connect } from "react-redux";
import Song from "./Song/Song";
import classes from "./SongList.module.css";
const SongList = (props) => {
    const songs = props.songs.map((song) => <Song song={song} key={song.title} />);
    return <div className={classes.SongList}>{songs}</div>;
};

const mapStateToProps = (state) => {
    return {
        songs: state.songs,
    };
};
export default connect(mapStateToProps)(SongList);
