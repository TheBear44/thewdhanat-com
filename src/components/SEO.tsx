import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

export default ({ title, description }) => {
  const data = useStaticQuery(graphql`
    query SEOQuery {
      site {
        siteMetadata {
          title
          titleTemplate
          description
          twitterUsername
        }
      }
    }
  `);
  return (
    <Helmet
      titleTemplate={data.site.siteMetadata.titleTemplate}
      defaultTitle={data.site.siteMetadata.title}
    >
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description || data.site.siteMetadata.description} />
      <meta property="og:title" content={title || data.site.siteMetadata.title} />
      <meta
        property="og:description"
        content={description || data.site.siteMetadata.description}
      />
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:site"
        content={data.site.siteMetadata.twitterUsername}
      />
      <meta
        name="twitter:creator"
        content={data.site.siteMetadata.twitterUsername}
      />
    </Helmet>
  );
};
