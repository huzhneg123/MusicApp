import axios from "axios";

// 封装ajax请求函数
// export default (url, data = {}, method = "GET") => {
//     axios({
//         method,
//         url,
//         data,
//     }).then(res => {
//         console.log(res);
//     });
// }

export default (url, data = {}, method = "GET") => {
    return new Promise((resolve, reject) => {
        axios({
            method,
            url,
            data,
            withCredentials: true
        }).then(res => {
            resolve(res.data)

        }).catch((error) => {
            reject(error)
        })

    })
}