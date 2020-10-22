// Reducers
import { combineReducers } from "redux";
const songListReducer = () => {
    return [
        { title: "Cicle", artist: "Post Malone", duration: "3:35" },
        { title: "Better Now", artist: "Post Malone", duration: "3:52" },
        { title: "Believer", artist: "Imagine Dragons", duration: "3:25" },
        { title: "Payphone", artist: "Maroon 5", duration: "4:05" },
        { title: "Lucid Dreams", artist: "Juice Wrld", duration: "4:00" },
    ];
};

const selectedSongReducer = (song = null, action) => {
    if (action.type === "SELECT_SONG") {
        return action.payload;
    }

    return song;
};

export default combineReducers({
    songs: songListReducer,
    selectedSong: selectedSongReducer,
});
