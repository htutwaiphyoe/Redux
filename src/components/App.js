import React from "react";
import SongList from "./SongList/SongList";
import SongDetail from "./SongDetail/SongDetail";
import classes from "./App.module.css";
const App = (props) => {
    return (
        <div className={classes.App}>
            <SongList />
            <SongDetail />
        </div>
    );
};

export default App;
