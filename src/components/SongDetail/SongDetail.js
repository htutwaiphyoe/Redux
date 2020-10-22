import React from "react";
import { connect } from "react-redux";
const SongDetail = (props) => {
    const { song } = props;
    if (song) {
        return (
            <div>
                <p>Song Detail</p>
                <p>{song.title}</p>
                <p>{song.artist}</p>
                <p>{song.duration}</p>
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
