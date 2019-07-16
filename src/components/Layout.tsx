/** @jsx jsx */
import { jsx, Layout } from "theme-ui";
import { Helmet } from "react-helmet";
import { Global } from "@emotion/core";

export default ({ children }) => {
  return (
    <Layout>
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
      <main sx={{ color: "text" }}>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Fira+Sans|Playfair+Display:700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        {children}
      </main>
    </Layout>
  );
};
