import React from "react";
import { connect } from "react-redux";

const SongDetail = (props) => {
    if (props.song) {
        return (
            <div>
                <p>{props.song.title}</p>
                <p>{props.song.duration}</p>
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
