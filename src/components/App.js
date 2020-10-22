import React from "react";
import SongList from "./SongList/SongList";
import SongDetail from "./SongDetail/SongDetail";
const App = (props) => {
    return (
        <div>
            <SongList />
            <SongDetail />
        </div>
    );
};

export default App;
