import React from "react";
import { connect } from "react-redux";
import Song from "./Song/Song";
const SongList = (props) => {
    const songs = props.songs.map((song) => <Song song={song} key={song.title} />);
    return <div>{songs}</div>;
};

const mapStateToProps = (state) => {
    return {
        songs: state.songs,
    };
};
export default connect(mapStateToProps)(SongList);
