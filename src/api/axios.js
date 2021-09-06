import axios from "axios";


// 封装登录
export function login(phone, password) {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: `http://localhost:3000/login/cellphone?phone=${phone}&password=${password}`,

        }).then(response => {

            resolve(response)
        }).
        catch((error) => {
            reject(error)
        })
    })
}
// 退出登录
export function loginOut() {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: 'http://localhost:3000/logout'
        }).then(response => {
            resolve(response.data)
        }).
        catch((error) => {
            reject(error)
        })
    })
}

//封装榜单详情
export function topCurrent() {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: 'http://localhost:3000/toplist/detail'
        }).then(response => {
            resolve(response.data)

        }).
        catch((error) => {
            reject(error)
        })
    })
}
// 封装音乐url
export function getMusicUrl(songId) {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: `http://localhost:3000/song/url?id=${songId}`,

        }).then(response => {
            resolve(response.data)

        }).
        catch((error) => {
            reject(error)
        })
    })
}

// 封装音乐详情
export function getMusicInfo(songId) {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: `http://localhost:3000/song/detail?ids=${songId}`
        }).then(response => {
            resolve(response.data)

        }).
        catch((error) => {
            reject(error)
        })

    })

}
// 音乐是否可用
export function getIsMusic(songId) {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: `http://localhost:3000/check/music?id=${songId}`
        }).then(response => {
            resolve(response.data)

        }).
        catch((error) => {
            reject(error)
        })

    })

}

// 推荐新音乐
export function newMusic() {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: 'http://localhost:3000/personalized/newsong'
        }).then(response => {
            resolve(response.data)

        }).
        catch((error) => {
            reject(error)
        })

    })

}
// 获取用户播放记录
export function userSonged(userId) {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: `http://localhost:3000/user/record?uid=${userId}`
        }).then(response => {
            resolve(response.data)

        }).
        catch((error) => {
            reject(error)
        })

    })

}
// 获取话题

export function topic(limit) {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: `http://localhost:3000/hot/topic?limit=${limit}`,
            withCredentials: true

        }).then(response => {
            resolve(response.data)

        }).
        catch((error) => {
            reject(error)
        })

    })

}


// 获取用户播放记录
export function userSongList(userId) {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: `http://localhost:3000/user/playlist?uid=${userId}`
        }).then(response => {
            resolve(response.data)

        }).
        catch((error) => {
            reject(error)
        })

    })

}
// 获取歌词
export function getSongWords(songId) {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: `http://localhost:3000/lyric?id=${songId}`
        }).then(response => {
            resolve(response.data)

        }).
        catch((error) => {
            reject(error)
        })

    })

}
// 获取用户关注列表
export function getUserWatch(userId) {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: `http://localhost:3000/user/follows?uid=${userId}`
        }).then(response => {
            resolve(response.data)

        }).
        catch((error) => {
            reject(error)
        })

    })
}
// 获取粉丝列表

export function getUserFance(userId) {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: `http://localhost:3000/user/followeds?uid=${userId}`

        }).then(response => {
            resolve(response.data)

        }).
        catch((error) => {
            reject(error)
        })

    })
}
// 热搜
export function getHotSearch() {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: 'http://localhost:3000/search/hot/detail'

        }).then(response => {
            resolve(response.data)

        }).
        catch((error) => {
            reject(error)
        })

    })
}
// 用户评论
export function getComments(songId) {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: `http://localhost:3000/comment/music?id=${songId}&limit=100`


        }).then(response => {
            resolve(response.data)

        }).
        catch((error) => {
            reject(error)
        })

    })
}
// 获取mv地址
export function getMvUrl(mvId) {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: `http://localhost:3000/mv/url?id=${mvId}`


        }).then(response => {
            resolve(response.data)

        }).
        catch((error) => {
            reject(error)
        })

    })
}
// 获取mv数据
export function getMvInfo(mvId) {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: `http://localhost:3000/mv/detail?mvid=${mvId}`


        }).then(response => {
            resolve(response.data)

        }).
        catch((error) => {
            reject(error)
        })

    })
}
// 获取mv点赞等数据
export function getMvZan(mvId) {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: `http://localhost:3000/mv/detail/info?mvid=${mvId}`


        }).then(response => {
            resolve(response.data)

        }).
        catch((error) => {
            reject(error)
        })

    })
}
// 排行榜
export function getTop(topId) {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: `http://localhost:3000/top/list?idx=${topId}`


        }).then(response => {
            resolve(response.data)

        }).
        catch((error) => {
            reject(error)
        })

    })
}

// 搜索关键字
export function getSearchWord() {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: "http://localhost:3000/search/default"


        }).then(response => {
            resolve(response.data)

        }).
        catch((error) => {
            reject(error)
        })

    })
}
// 搜索
export function getSearchSugget(songName) {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: `http://localhost:3000/search?keywords=${songName}`


        }).then(response => {
            resolve(response.data)

        }).
        catch((error) => {
            reject(error)
        })

    })
}

// 搜索建议
export function getSearchSu(songName) {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: `http://localhost:3000/search/suggest?keywords=${songName}`


        }).then(response => {
            resolve(response.data)

        }).
        catch((error) => {
            reject(error)
        })

    })
}
// mv评论
export function getMvComments(mvId) {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: `http://localhost:3000/comment/mv?id=${mvId}`


        }).then(response => {
            resolve(response.data)

        }).
        catch((error) => {
            reject(error)
        })

    })
}
// 歌手榜
export function getSingerTop() {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: 'http://localhost:3000/toplist/artist'



        }).then(response => {
            resolve(response.data)

        }).
        catch((error) => {
            reject(error)
        })

    })
}
// 歌手描述
export function getSingerDesc(singId) {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: `http://localhost:3000/artist/desc?id=${singId}`

        }).then(response => {
            resolve(response.data)
        }).
        catch((error) => {
            reject(error)
        })
    })
}
// 获取歌手单曲
export function getSingerSong(singId) {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: `http://localhost:3000/artists?id=${singId}`

        }).then(response => {
            resolve(response.data)
        }).
        catch((error) => {
            reject(error)
        })
    })
}
// 获取歌手专辑
export function getSingerAlum(singId) {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: `http://localhost:3000/artist/album?id=${singId}`

        }).then(response => {
            resolve(response.data)
        }).
        catch((error) => {
            reject(error)
        })
    })
}
// 获取歌手专辑内容
export function getAlumSong(alumId) {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: `http://localhost:3000/album?id=${alumId}`

        }).then(response => {
            resolve(response.data)
        }).
        catch((error) => {
            reject(error)
        })
    })
}
// 获取歌单详情
export function getSongDan() {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: 'http://localhost:3000/playlist/detail/dynamic?id=24381616',
            withCredentials: true


        }).then(response => {
            resolve(response.data)
        }).
        catch((error) => {
            reject(error)
        })
    })
}
// 发送短信验证码
export function sendMessage(phone) {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: `http://localhost:3000/captcha/sent?phone=${phone}`

        }).then(response => {
            resolve(response.data)
        }).
        catch((error) => {
            reject(error)
        })
    })
}
// 验证验证码
export function jiaoyan(phone, code) {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: `http://localhost:3000/captcha/verify?phone=${phone}&captcha=${code}`

        }).then(response => {
            resolve(response)
        }).
        catch((error) => {
            reject(error)
        })
    })
}
// 专辑评论
export function getAlumComments(alumId, limit) {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: `http://localhost:3000/comment/album?id=${alumId}&limit=${limit}`

        }).then(response => {
            resolve(response)
        }).
        catch((error) => {
            reject(error)
        })
    })
}
// 专辑点赞等数
export function getAlumCount(alumId) {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: `http://localhost:3000/album/detail/dynamic?id=${alumId}`

        }).then(response => {
            resolve(response)
        }).
        catch((error) => {
            reject(error)
        })
    })
}
// 新碟上架
export function getNewCd(limit, area) {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: `http://localhost:3000/top/album?limit=${limit}&area=${area}`

        }).then(response => {
            resolve(response.data)
        }).
        catch((error) => {
            reject(error)
        })
    })
}
// 全部mv
export function getAllMv(limit, area) {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: `http://localhost:3000/mv/all?limit=${limit}&area=${area}`

        }).then(response => {
            resolve(response.data)
        }).
        catch((error) => {
            reject(error)
        })
    })
}
// 电台分类
export function getDjType() {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: 'http://localhost:3000/dj/catelist'

        }).then(response => {
            resolve(response.data)
        }).
        catch((error) => {
            reject(error)
        })
    })
}
// 分类推荐
export function getTypeTuijian(typeId) {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: `http://localhost:3000/dj/recommend/type?type=${typeId}`

        }).then(response => {
            resolve(response.data)
        }).
        catch((error) => {
            reject(error)
        })
    })
}
// 电台详情
export function getDjMassege(DjId) {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: `http://localhost:3000/dj/detail?rid=${DjId}`

        }).then(response => {
            resolve(response.data)
        }).
        catch((error) => {
            reject(error)
        })
    })
}
// 电台节目
export function getDjPrograms(DjId, limit) {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: `http://localhost:3000/dj/program?rid=${DjId}&limit=${limit}`

        }).then(response => {
            resolve(response.data)
        }).
        catch((error) => {
            reject(error)
        })
    })
}
// 电台今日优选
export function getDjGoodTody() {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: 'http://localhost:3000/dj/today/perfered'

        }).then(response => {
            resolve(response.data)
        }).
        catch((error) => {
            reject(error)
        })
    })
}
// 推荐电台
export function getTuiJianDj() {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: 'http://localhost:3000/dj/recommend'

        }).then(response => {
            resolve(response.data)
        }).
        catch((error) => {
            reject(error)
        })
    })
}
// 付费精选电台
export function getPayFor(limit) {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: `http://localhost:3000/dj/paygift?limit=${limit}`

        }).then(response => {
            resolve(response.data)
        }).
        catch((error) => {
            reject(error)
        })
    })
}