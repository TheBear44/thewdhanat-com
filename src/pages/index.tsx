/** @jsx jsx */
import { jsx } from "theme-ui";
import { Styled } from "theme-ui";

import Layout from "../components/Layout";

export default props => {
  return (
    <Layout title="Home">
        <Styled.h1>Hi!</Styled.h1>
        <Styled.h2>I'm Thew Dhanat.</Styled.h2>
    </Layout>
  );
};
