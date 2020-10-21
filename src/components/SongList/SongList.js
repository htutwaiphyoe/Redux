import React from "react";
import { connect } from "react-redux";
import Song from "./Song/Song";

class SongList extends React.Component {
    showList() {
        return this.props.songs.map((song) => <Song song={song} key={song.title} />);
    }
    render() {
        return <div className="ui divided list">{this.showList()}</div>;
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        songs: state.songs,
    };
};
export default connect(mapStateToProps)(SongList);
