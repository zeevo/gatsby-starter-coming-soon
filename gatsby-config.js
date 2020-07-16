module.exports = {
  siteMetadata: {
    title: `Coming soon.`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-coming-soon`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
