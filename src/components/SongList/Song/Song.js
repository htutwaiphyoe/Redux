import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../../../actions";
const Song = (props) => {
    const { song } = props;
    return (
        <div className="item" key={song.title}>
            <div className="right floated content">
                <button className="ui button primary" onClick={() => props.selectSong(song)}>
                    Select
                </button>
            </div>
            <div className="content">{song.title}</div>
        </div>
    );
};
const mapDispatchToProps = { selectSong };
export default connect(null, mapDispatchToProps)(Song);
