import axios from "axios";
// 获取视频列表标签
export function getVideoTagList() {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: 'http://localhost:3000/video/group/list',
            withCredentials: true

        }).then(response => {

            resolve(response.data)
        }).
        catch((error) => {
            reject(error)
        })
    })
}
// 获取视频分类列表   报废
// export function getVideoTypeList() {
//     return new Promise((resolve, reject) => {
//         axios({
//             method: "GET",
//             url: 'http://localhost:3000/video/category/list',
//             withCredentials: true

//         }).then(response => {

//             resolve(response.data)
//         }).
//         catch((error) => {
//             reject(error)
//         })
//     })
// }

// 获取视频标签列表下的视频
export function getvideo(groupId) {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: `http://localhost:3000/video/group?id=${groupId}`,
            withCredentials: true

        }).then(response => {

            resolve(response.data)
        }).
        catch((error) => {
            reject(error)
        })
    })
}
// 视频播放地址
export function getVideoUrl() {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: 'http://localhost:3000/video/url?id=FF4AD75C2DDC95A734E69C72C4863510',
            withCredentials: true

        }).then(response => {

            resolve(response.data)
        }).
        catch((error) => {
            reject(error)
        })
    })
}