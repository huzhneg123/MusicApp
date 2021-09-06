export const singer = state => state.singer
export const playing = state => state.playing
export const fullScreen = state => state.fullScreen
export const playlist = state => state.playlist
export const sequenceList = state => state.sequenceList
export const mode = state => state.mode
export const currentIndex = state => state.currentIndex
    // 通过歌曲播放列表以及当前索引得到当前播放歌曲
export const currentSong = (state) => { return state.playlist[state.currentIndex] || {} }

export const programId = state => state.programId
    // 历史记录
export const searchHistory = state => state.searchHistory