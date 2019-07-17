/** @jsx jsx */
import { jsx, Layout } from "theme-ui";
import { Helmet } from "react-helmet";
import { Global } from "@emotion/core";

import SEO from "./SEO";

export default ({ title, description, children }) => {
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
          rel="stylesheet"
        />
      </Helmet>
      <main sx={{ color: "text", paddingX: "7%", paddingTop: "7%" }}>
        {children}
      </main>
    </Layout>
  );
};
