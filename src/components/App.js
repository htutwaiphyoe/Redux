import React from "react";
import SongList from "./SongList/SongList";
import SongDetail from "./SongDetail/SongDetail";
import "./App.css";

const App = (props) => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <SongList />
                </div>
                <div className="column two wide">
                    <SongDetail />
                </div>
            </div>
        </div>
    );
};

export default App;
