import storage from "good-storage";
// 防止产生冲突的存储本地的数据
const SEARCH_KEY = '__search__'
    // 最大长度15
const SEARCH_MAX_LENGTH = 15

function insertArray(arr, val, compare, maxlen) {
    const index = arr.findIndex(compare)
    if (index === 0) {
        return
    }
    if (index > 0) {
        arr.splice(index, 1)
    }
    arr.unshift(val)
    if (maxlen && arr.length > maxlen) {
        arr.pop()
    }
}
export function saveSearch(query) {
    let searches = storage.get(SEARCH_KEY, [])
    insertArray(searches, query, (item) => {
        return item === query
    }, SEARCH_MAX_LENGTH)

    storage.set(SEARCH_KEY, searches)
    return searches;
}
// 删除本地存储以及历史搜索数组
function deleteFromArray(arr, compare) {
    const index = arr.findIndex(compare)
    if (index > -1) {
        arr.splice(index, 1)
    }
}


export function seleteSearch(query) {
    let searches = storage.get(SEARCH_KEY, [])
    deleteFromArray(searches, (item) => {
        return item === query
    })
    storage.set(SEARCH_KEY, searches)
    return searches;
}

export function clearSearch() {
    storage.remove(SEARCH_KEY)
    return []
}