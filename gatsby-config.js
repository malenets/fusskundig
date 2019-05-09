require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`
});
module.exports = {
	siteMetadata: {
		title: `Fußkundig | Podologie Düsseldorf`,
		description: `Sie haben Fußbeschwerden? Wir finden die Ursache!  Machen Sie noch heute einen Termin ☎
Langjährige Erfahrung ✓  alle Kassen ✓ `,
		author: `Foxter Solutions`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: process.env.SPACE_ID,
				// Learn about environment variables: https://gatsby.dev/env-vars
				accessToken: process.env.ACCESS_TOKEN
			}
		},
		{
			resolve: `gatsby-plugin-prefetch-google-fonts`,
			options: {
				fonts: [
					{
						family: `Dancing Script`,
						subsets: [ `latin` ]
					},
					{
						family: `Open Sans`,
						variants: [ `400`, `700` ]
					}
				]
			}
		},
		{
			resolve: `gatsby-plugin-styled-components`,
			options: {
				// Add any options here
			}
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
			}
		},
		{
			resolve: `gatsby-plugin-favicon`,
			options: {
				logo: './src/images/favicon.png',

				// WebApp Manifest Configuration
				appName: null, // Inferred with your package.json
				appDescription: null,
				developerName: null,
				developerURL: null,
				dir: 'auto',
				lang: 'en-US',
				background: '#fff',
				theme_color: '#fff',
				display: 'standalone',
				orientation: 'any',
				start_url: '/?homescreen=1',
				version: '1.0',

				icons: {
					android: true,
					appleIcon: true,
					appleStartup: true,
					coast: false,
					favicons: true,
					firefox: true,
					yandex: false,
					windows: false
				}
			}
		}

		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// 'gatsby-plugin-offline',
	]
};
