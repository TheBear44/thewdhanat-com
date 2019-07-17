module.exports = {
  siteMetadata: {
    title: "Thew Dhanat",
    titleTemplate: "%s - Thew Dhanat",
    description: "Thew Dhanat @ www.thewdhanat.com",
    twitterUsername: "@ThewDhanat"
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-143999766-1"
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-typescript",
    "gatsby-plugin-typescript-eslint"
  ]
};
