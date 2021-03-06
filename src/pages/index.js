import React from 'react';
import styled from 'styled-components';

import Greeting from '../components/greeting/greeting';
import Teaser from '../components/teaser/teaser';

import {mainGrid, defaultGap} from '../styles/variables';

const getArticleTeasers = posts => {
  return posts
    .filter(post => post.node.frontmatter.title.length > 0)
    .map(({node: post}) => {
      const {id, frontmatter} = post;
      const {path, articleImagePath, title} = frontmatter;
      const {sizes} = articleImagePath.childImageSharp;

      sizes.sizes =
        '(max-width: 736px) 100vw, (max-width: 1024px) 50vw, (max-width: 1400px) 33vw, 460px';

      return <Teaser link={path} imageSizes={sizes} title={title} key={id} />;
    });
};

const Container = styled.div`
  ${mainGrid};
  margin-bottom: ${defaultGap};
`;

export default function Index({data}) {
  const {edges: posts} = data.allMarkdownRemark;

  return (
    <Container>
      <Greeting />
      {getArticleTeasers(posts)}
    </Container>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            articleImagePath {
              childImageSharp {
                sizes(
                  maxWidth: 800
                  maxHeight: 800
                  cropFocus: CENTER
                  traceSVG: {color: "#4E4C5D", blackOnWhite: false}
                ) {
                  ...GatsbyImageSharpSizes_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;
