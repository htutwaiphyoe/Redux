import { combineReducers } from "redux";
// Reducers

// SongListReducer
const songListReducer = () => {
    return [
        { title: "Watchers", duration: "2:30" },
        { title: "Job", duration: "5:10" },
        { title: "Circle", duration: "3:10" },
        { title: "Better Now", duration: "3:10" },
    ];
};

// selected song reducer
const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === "SELECT_SONG") {
        return action.payload.song;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songListReducer,
    selectedSong: selectedSongReducer,
});
