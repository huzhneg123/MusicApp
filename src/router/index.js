// 路由器模块
import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入路由组件
import Cloud from '../pages/cloud/Cloud'
import Find from '../pages/find/Find'
// k歌
import Ksong from '../pages/ksong/Ksong'
import KsongMainPage from '@/pages/ksong/KsongMainPage'
import KsongTopPage from '@/pages/ksong/KsongTopPage'
import KsongTypePage from '@/pages/ksong/KsongTypePage'
import TypeTuijian from '@/pages/ksong/TypeTuijian'
import KsongGround from '@/pages/ksong/KsongGround'
import KsongDjList from '@/pages/ksong/KsongDjList'

import Mine from '../pages/mine/Mine'
import Podcast from '../pages/podcast/Podcast'

import Login from '../pages/Login/Login'

// 音乐播放路由
import Music from '@/pages/music/Music'
// mv路由
import Mv from '@/pages/mv/Mv'
// 排行榜
import RankingList from '@/pages/rankingList/RankingList'
// mine=>>>最近播放路由
import RecentlyPlay from '@/pages/mine/child/RecentlyPlay'
// mine=>>>最近我喜欢的音乐
import MyLikeMusic from '@/pages/mine/child/MyLikeMusic'
// mine =>>>个人中心
import UserInfo from '@/pages/mine/child/UserInfo'
// mine=>>>个人中心=>>>关注
import Watch from '@/pages/mine/watch/Watch'
import Watchs from '@/pages/mine/watch/Watchs'
import Fance from '@/pages/mine/watch/Fance'
// find=>>>话题
import Topic from '@/pages/find/child/Topic'
// 搜索
import Search from '@/pages/search/Search'
// 新歌榜
import TopSong from '@/pages/find/child/TopSong'
// 热歌榜单
import HotSong from '@/pages/find/child/HotSong'
// 原创榜
import MedeMySelf from '@/pages/find/child/MedeMySelf'
// 专辑详情
// 歌手‘=
import Singer from '@/pages/singer/Singer'
// 歌手详情
import SingerInfo from '@/pages/singerInfo/SingerInfo'
// SingerInfo=>>>主页/歌曲、专辑、视频
import MainPage from '@/pages/singerInfo/MainPage'
import Song from '@/pages/singerInfo/Song'
import Alum from '@/pages/singerInfo/Alum'
import Video from '@/pages/singerInfo/Video'
// 专辑播放页面
import AlumPage from '@/pages/singerInfo/AlumPage'
// 排行榜歌曲列表页面
// import RangKingPage from '@/components/RangKingPage'
import RangKingPage from '@/pages/rankingList/RangKingPage'

//验证码登录页面
import LonginCode from '@/pages/Login/LonginCode'
// 全部新碟
import AllNewCd from '@/pages/allNewCd/AllNewCd'
// 全部mv
import AllMv from '@/pages/allMv/AllMv'
// 视频播放
import CloudVideo from '@/pages/cloud/CloudVideo'
// 使用routerasd
Vue.use(VueRouter)

export default new VueRouter({
    routes: [

        {
            path: '/cloud',
            component: Cloud,
            meta: {
                showFoot: true
            }
        },
        {
            path: '/find',
            component: Find,
            meta: {
                showFoot: true
            },
            // children: [{
            //         path: ':id',
            //         component: AlbumInfo
            //     }

            // ]
        },
        {
            path: '/ksong',
            component: Ksong,
            meta: {
                showFoot: true
            },
            children: [{
                    path: '/ksong/ksongMainPage',
                    component: KsongMainPage,
                    meta: {
                        showFoot: true
                    },
                },
                {
                    path: '/ksong/ksongTopPage',
                    component: KsongTopPage,


                },
                {
                    path: '/ksong/ksongTypePage',
                    component: KsongTypePage,

                },

                {
                    path: '',
                    redirect: '/ksong/ksongMainPage'
                }
            ]
        },
        {
            path: '/mine',
            component: Mine,
            meta: {
                showFoot: true
            }
        },
        {
            path: '/podcast',
            component: Podcast,
            meta: {
                showFoot: true
            },

        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/music',
            component: Music
        },
        {
            path: '/mv',
            component: Mv
        },
        {
            path: '/rankingList',
            component: RankingList
        },
        {
            path: '/recentlyPlay',
            component: RecentlyPlay
        },
        {
            path: '/topic',
            component: Topic
        },
        {
            path: '/myLikeMusic',
            component: MyLikeMusic
        },
        {
            path: '/userInfo',
            component: UserInfo,

        },
        {
            path: '/watch',
            component: Watch,
            children: [{
                    path: '/watch/watchs',
                    component: Watchs
                },
                {
                    path: '/watch/fance',
                    component: Fance
                },
                {
                    path: '',
                    redirect: '/watch/watchs'
                }
            ]
        },
        {
            path: '/search',
            component: Search
        },
        {
            path: '/topSong',
            component: TopSong
        },

        {
            path: '/hotSong',
            component: HotSong
        },
        {
            path: '/medeMySelf',
            component: MedeMySelf
        },
        {
            path: '/singer',
            component: Singer,

        },
        {
            path: '/singerInfo',
            component: SingerInfo,
            children: [{
                    path: '/singerInfo/mainPage',
                    component: MainPage
                },
                {
                    path: '/singerInfo/song',
                    component: Song
                },
                {
                    path: '/singerInfo/alum',
                    component: Alum
                },
                {
                    path: '/singerInfo/video',
                    component: Video
                },
                {
                    path: '/',
                    redirect: '/singerInfo/mainPage'
                }

            ]

        },
        {
            path: '/alumPage',
            component: AlumPage,

        },
        {
            path: '/rangKingPage',
            component: RangKingPage,

        },
        {
            path: '/longinCode',
            component: LonginCode,

        },
        {
            path: '/allNewCd',
            component: AllNewCd,

        },
        {
            path: '/allMv',
            component: AllMv,

        },
        {
            path: '/typeTuijian',
            component: TypeTuijian,

        },
        {
            path: '/ksongGround',
            component: KsongGround,

        },
        {
            path: '/ksongDjList',
            component: KsongDjList,

        },
        {
            path: '/cloudVideo',
            component: CloudVideo,

        },




        // 默认显示路由页面 
        {
            path: '/',
            redirect: '/find'
        }
    ]
})