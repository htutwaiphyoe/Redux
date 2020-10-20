// Action Creators

// Select Song Action Creator

export const selectSong = (song) => {
    // return action
    return {
        type: "SELECT_SONG",
        payload: {
            song,
        },
    };
};
