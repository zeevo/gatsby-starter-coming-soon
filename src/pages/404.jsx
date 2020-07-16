import { graphql } from 'gatsby';

import Index from '.';

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
