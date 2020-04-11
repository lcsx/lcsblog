module.exports = {
	title: 'LCS',
	description: '我的个人网站',
	head: [ // 注入到当前页面的 HTML <head> 中的标签
		['link', {
			rel: 'icon',
			href: '/logo.jpg'
		}], // 增加一个自定义的 favicon(网页标签的图标)
		['script', {},
			`
			var _hmt = _hmt || [];
			(function() {
			  var hm = document.createElement("script");
			  hm.src = "https://hm.baidu.com/hm.js?82f1d7da12a35266cc5d92a119c2a560";
			  var s = document.getElementsByTagName("script")[0]; 
			  s.parentNode.insertBefore(hm, s);
			})();
		`
		]
	],
	base: '/', // 这是部署到github相关的配置
	markdown: {
		lineNumbers: false // 代码块显示行号
	},
	themeConfig: {
		nav: [ // 导航栏配置
			{
				text: '前端基础',
				link: '/accumulate/'
			},
			{
				text: '算法题库',
				link: '/algorithm/'
			},
			{
				text: '微博',
				link: 'https://baidu.com'
			}
		],
		sidebar: [{
			title: 'vueS', // 必要的
			path: '/', // 可选的, 应该是一个绝对路径
			collapsable: false, // 可选的, 默认值是 true,
			sidebarDepth: 3, // 可选的, 默认值是 1
			children: [{
				title: 'vue',
				path: '/vue/vue/'
			}, {
				title: 'axios',
				path: '/vue/axios/',
			}, {
				title: 'vue-cli',
				children: [{
					title: 'alias配置别名',
					path: '/vue/vue-cli/alias/'
				}, {
					title: '跨域',
					path: '/vue/vue-cli/proxy/'
				}]
			}, {
				title: 'vuepress',
				path: '/vue/vuepress/'
			}, {
				title: 'Vuex',
				path: '/vue/vuex/'
			}]
		}, {
			title: 'python',
			// path:''
			children: [{
				title: 'flaskRestful',
				path: '/python/flaskRestful/'
			}]
		}, {
			title: 'git',
			path: '/git/'
		}, {
			title: 'JavaScript',
			// path: '/js/youhua/',
			children: [{
					title: 'promise',
					path: '/js/promise/'
				}, {
					title: '尾调用',
					path: '/js/youhua/'
				}, {
					title: 'es6',
					children: [{
							title: '数组',
							path: '/js/es6/array/'
						},
						{
							title: '类',
							path: '/js/es6/class/'
						},
						{
							title: '对象',
							path: '/js/es6/obj/'
						},
						{
							title: '字符串',
							path: '/js/es6/string/'
						},
						{
							title: '反射',
							path: '/js/es6/reflect/'
						},
						{
							title: '代理',
							path: '/js/es6/proxy/'
						},
						{
							title: '导出/入',
							path: '/js/es6/exportAndimport/'
						}
					]
				},
				{
					title: 'es8',
					path: '/js/es8/'
				}
			]
		}, {
			title: 'css',
			path: '/css/'
		}],
		sidebarDepth: 5, // 侧边栏显示2级
	}
	// ,
	// plugins: [
	// 	'vuepress-plugin-baidu-autopush'
	// ]
};
