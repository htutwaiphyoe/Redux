import React from "react";
import { connect } from "react-redux";
import classes from "./SongList.module.css";
const SongDetail = (props) => {
    const { song } = props;
    if (song) {
        return (
            <div className={classes.SongDetail}>
                <h2>Song Detail</h2>
                <p>Title: {song.title}</p>
                <p>Artist: {song.artist}</p>
                <p>Duration: {song.duration}</p>
            </div>
        );
    }
    return <div>Select a song</div>;
};

const mapStateToProps = (state) => {
    return {
        song: state.selectedSong,
    };
};
export default connect(mapStateToProps)(SongDetail);
