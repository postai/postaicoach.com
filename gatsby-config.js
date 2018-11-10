module.exports = {
  //pathPrefix: "/postaicoach.com",
  pathPrefix: "/postaicoach.com",
  siteMetadata: {
    title: "Postai Coach Financeiro",
    author: "Postai",
    description: "Liberdade Financeira"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'Coach Financeiro',
        //start_url: '/postaicoach.com',
        start_url: '/postaicoach.com',
        background_color: '#1E3514',
        theme_color: '#1E3514',
        display: 'minimal-ui',
        icon: 'src/images/postai-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
