import { playMode } from "../common/js/config"
const state = {
    singer: {},
    // 音乐播放器页面参数
    playing: false,
    fullScreen: false,
    playlist: [],
    sequenceList: [],
    mode: playMode.sequence,
    currentIndex: -1,
    programId: 0,
    // 历史记录
    searchHistory: []


}

export default state