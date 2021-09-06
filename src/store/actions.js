import * as types from './mutation-types'
import { saveSearch, seleteSearch, clearSearch } from '../common/js/cache'

export const selectPlay = function({ commit }, { list, index }) {
    commit(types.SET_SEQUENCE_LIST, list)
    commit(types.SET_PLAYLIST, list)
    commit(types.SET_CURRENT_INDEX, index)
    commit(types.SET_FULL_SCREEN, true)
    commit(types.SET_PLAYING_STATE, true)

}
export const saveSearchHistory = function({ commit }, query) {
        commit(types.SET_SEARCHHISTORY, saveSearch(query))

    }
    // 删除某一个历史搜索记录
export const deleteSearchHistory = function({ commit }, query) {
        commit(types.SET_SEARCHHISTORY, seleteSearch(query))

    }
    // 清空历史搜索记录
export const clearSearchHistory = function({ commit }) {
    commit(types.SET_SEARCHHISTORY, clearSearch())

}