import axios from "axios";

// 获取用户信息
export function getUserInfo() {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: 'http://localhost:3000/user/subcount',
            withCredentials: true

        }).then(response => {

            resolve(response.data)
        }).
        catch((error) => {
            reject(error)
        })
    })
}
// 获取用户等级         接口已损坏
// export function getUserLevel() {
//     return new Promise((resolve, reject) => {
//         axios({
//             method: "GET",
//             url: 'http://localhost:3000/user/level',
//             withCredentials: true

//         }).then(response => {

//             resolve(response.data)
//         }).
//         catch((error) => {
//             reject(error)
//         })
//     })
// }

// 获取用户歌单
export function getUserSongList(userId) {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: `http://localhost:3000/user/playlist?uid=${userId}`,
            withCredentials: true

        }).then(response => {

            resolve(response.data)
        }).
        catch((error) => {
            reject(error)
        })
    })
}
// 获取用户评论   报废
// export function getUserRecomments(userId) {
//     return new Promise((resolve, reject) => {
//         axios({
//             method: "GET",
//             url: `http://localhost:3000/user/comment/history?uid=${userId}`,
//             withCredentials: true

//         }).then(response => {

//             resolve(response.data)
//         }).
//         catch((error) => {
//             reject(error)
//         })
//     })
// }

// 用户电台
export function getUserPrograms(userId) {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: `http://localhost:3000/user/dj?uid=${userId}`,
            withCredentials: true

        }).then(response => {

            resolve(response.data)
        }).
        catch((error) => {
            reject(error)
        })
    })
}