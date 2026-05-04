import type { MusicPlayerConfig } from "../types/config";

// 音乐播放器配置（野花API + 随机播放 + 你的网易云歌单）
export const musicPlayerConfig: MusicPlayerConfig = {
	// 是否在导航栏显示音乐播放器入口
	showInNavbar: true,

	// 播放器模式：meting=API解析，local=本地列表
	mode: "meting",

	// 默认音量 0~1
	volume: 0.7,

	// 播放模式：list=列表循环，one=单曲循环，random=随机播放
	playMode: "random",

	// 是否显示歌词
	showLyrics: true,

	// Meting API（野花+备用）
	meting: {
		// 野花 API（主）
		api: "https://api.flowerapi.xyz/meting/api/?server=:server&type=:type&id=:id",
		// 音乐平台：netease=网易云
		server: "netease",
		// 类型：playlist=歌单
		type: "playlist",
		// 你的歌单 ID
		id: "17943833590",
		// 认证token（不需要留空）
		auth: "",
		// 备用 API（野草+其他稳定源）
		fallbackApis: [
			"https://api.music.13ka.com/meting/api/?server=:server&type=:type&id=:id",
			"https://api.injahow.cn/meting/?server=:server&type=:type&id=:id",
		],
	},

	// 本地音乐（保留默认，不影响API播放）
	local: {
		playlist: [
			{
				name: "樱花树下的DJ",
				artist: "旺仔小乔",
				url: "/assets/music/樱花树下的约定（DJ-lucky小阳版） - 旺仔小乔.mp3",
				cover: "/assets/music/cover/109951169585655912.webp",
				lrc: "/assets/music/yinghua.lrc",
			},
		],
	},
};