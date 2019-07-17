/** @jsx jsx */
import { jsx } from "theme-ui";
import { Styled } from "theme-ui";

import Layout from "../components/Layout";

export default props => {
  return (
    <Layout title="Oops!">
        <Styled.h1>Oops!</Styled.h1>
        <Styled.h2>You have found a missing page.</Styled.h2>
    </Layout>
  );
};
