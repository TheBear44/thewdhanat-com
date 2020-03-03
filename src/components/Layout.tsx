/** @jsx jsx */
import { jsx, Layout } from "theme-ui";
import { Helmet } from "react-helmet";
import { Global } from "@emotion/core";

import SEO from "./SEO";

export default ({
  title,
  description,
  children
}: {
  title: string;
  description?: string;
  children: React.ReactChild[];
}) => {
  return (
    <Layout>
      <SEO title={title} description={description} />
      <Global
        styles={{
          "*": {
            boxSizing: "border-box"
          },
          body: {
            margin: 0
          }
        }}
      />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Fira+Sans|Playfair+Display:700&display=swap"
          rel="preload"
          as="style"
        />
        <link href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css?family=Fira+Sans|Playfair+Display:700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <main sx={{ color: "text", paddingX: "7%", paddingTop: "7%" }}>
        {children}
      </main>
    </Layout>
  );
};
