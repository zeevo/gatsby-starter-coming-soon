import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import parse from 'html-react-parser';
import styled from 'styled-components';

import Layout from '../components/Layout';

const Container = styled.div`
  margin: 200px;
`;

const IndexRoute = props => (
  <Layout>
    <Helmet>
      <title>{parse(props.data.site.siteMetadata.title)}</title>
    </Helmet>
    <Container>
      <h1>Coming soon.</h1>
    </Container>
  </Layout>
);

export default IndexRoute;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
