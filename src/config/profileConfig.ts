import type { ProfileConfig } from "../types/config";

export const profileConfig: ProfileConfig = {
	// 头像
	// 图片路径支持三种格式：
	// 1. public 目录（以 "/" 开头，不优化）："/assets/images/avatar.webp"
	// 2. src 目录（不以 "/" 开头，自动优化但会增加构建时间，推荐）："assets/images/avatar.webp"
	// 3. 远程 URL："https://example.com/avatar.jpg"
	avatar: "https://q1.qlogo.cn/g?b=qq&nk=1984551484&s=640",

	// 名字
	name: "Eastoh",

	// 个人签名
	bio: "Hello, I'm Eastoh.",

	// 链接配置
	// 已经预装的图标集：fa7-brands，fa7-regular，fa7-solid，material-symbols，simple-icons
	// 访问https://icones.js.org/ 获取图标代码，
	// 如果想使用尚未包含相应的图标集，则需要安装它
	// `pnpm add @iconify-json/<icon-set-name>`
	// showName: true 时显示图标和名称，false 时只显示图标
	links: [
		{
			name: "qq",
			icon: "fa7-brands:qq",
			url: "https://qm.qq.com/cgi-bin/qm/qr?k=tmyWwMS8BJPTWSfH2jpEe6BYHUvyE7PZ",
			showName: true,
		},
	{
  name: "邮箱",
  icon: "fa7-solid:envelope",
  url: "http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=2uvj4u7v7_vu4u6aq6v0ubW3",
  showName: true,
},
],
};
