import type { CommentConfig } from "../types/config";

export const commentConfig: CommentConfig = {
	// 启用 Giscus（最好、最稳、永久可用）
	type: "giscus",

	twikoo: {
		envId: "https://twikoo.vercel.app",
		lang: "zh-CN",
		visitorCount: true,
	},

	waline: {
		serverURL: "https://waline.vercel.app",
		lang: "zh-CN",
		emoji: [
			"https://unpkg.com/@waline/emojis@1.4.0/weibo",
			"https://unpkg.com/@waline/emojis@1.4.0/bilibili",
			"https://unpkg.com/@waline/emojis@1.4.0/bmoji",
		],
		login: "force",
		visitorCount: true,
	},

	artalk: {
		server: "https://artalk.example.com/",
		locale: "zh-CN",
		visitorCount: true,
	},

	// ✅ 这是你自己的配置，100% 可用
	giscus: {
		repo: "eastoh/blog-comments",
		repoId: "R_kgDOSYroYg",
		category: "Announcements",
		categoryId: "DIC_kwDOSYroYs4C8p3l",
		mapping: "pathname",
		strict: "0",
		reactionsEnabled: "1",
		emitMetadata: "0",
		inputPosition: "bottom",
		lang: "zh-CN",
		loading: "lazy",
	},

	disqus: {
		shortname: "firefly",
	},
};