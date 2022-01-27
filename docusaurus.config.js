// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/* @type {import('@ducktape/types').Config} */
const config = {
	title: 'Ducktape',
	tagline: 'An open source 2d game engine that makes sure your game stands out.',
	url: 'https://ducktapeengine.github.io',
	baseUrl: '/',
	onBrokenLinks: 'warn',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/logo.png',
	organizationName: 'DucktapeEngine', // Usually your GitHub org/user name.
	projectName: 'DucktapeEngine.github.io', // Usually your repo name.
	deploymentBranch: 'main',
	presets: [
		[
			'classic',
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					editUrl: 'https://github.com/ducktapeengine/ducktape/tree/main/packages/create-ducktape/templates/shared/',
				},
				blog: {
					showReadingTime: true,
					editUrl:
						'https://github.com/ducktapeengine/ducktape/tree/main/packages/create-ducktape/templates/shared/',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
		],
	],

	themeConfig:
		({
			navbar: {
				title: 'Ducktape',
				logo: {
					alt: 'My Site Logo',
					src: 'img/logo.png',
				},
				items: [
					{
						type: 'doc',
						docId: 'intro',
						position: 'left',
						label: 'Docs',
					},
					{
						to: '/scriptingreference',
						label: 'API',
						position: 'left',
					},
					{ 
						to: '/blog', 
						label: 'Blog', 
						position: 'left' 
					},
					{
						href: 'https://github.com/ducktapeengine/ducktape',
						label: 'GitHub',
						position: 'right',
					}
				],
				
			},
			footer: {
				style: 'dark',
				links: [
					{
						title: 'Docs',
						items: [
							{
								label: 'Manual',
								to: '/Manual/Intro',
							},
							{
								label: 'Scripting Reference',
								to: '/ScriptingReference',
							}
						],
					},
					{
						title: 'Community',
						items: [
							{
								label: 'StackOverflow',
								href: 'https://stackoverflow.com/questions/tagged/ducktapeengine',
							},
							{
								label: 'Discord',
								href: 'https://dsc.gg/ducktape',
							}
						],
					},
					{
						title: 'More',
						items: [
							{
								label: 'Blog',
								to: '/blog',
							},
							{
								label: 'GitHub',
								href: 'https://github.com/ducktapeengine/ducktape',
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} Ducktape, Inc.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},

			colorMode: {
				defaultMode: 'dark',
				disableSwitch: true,
				respectPrefersColorScheme: false,
			},

			image: 'img/ducktape.png',

			announcementBar: {
				id: 'support_us',
				content:
				  'Like what you see? Help us by <a target="_blank" rel="noreferrer noopener" href="https://github.com/ducktapeengine/ducktape">starring the repository!</a>',
				backgroundColor: '#18191A',
				textColor: '#FED900',
				isCloseable: true,
			  },
		}),
};

module.exports = config;
