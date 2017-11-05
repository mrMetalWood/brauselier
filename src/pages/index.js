import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Img from 'gatsby-image';
import {rgba} from 'polished';

import {
  primaryAccentColor,
  secondaryFontColor,
  mainGrid
} from '../global-styles/variables';

const Container = styled.div`${mainGrid};`;

const ArticleTeaser = styled(Link)`
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  position: relative;
  display: block;
  grid-column-end: span 4;
`;

const ArticleTeaserOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
  opacity: 0;
  transition: opacity 150ms ease-in-out;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  color: ${secondaryFontColor};
  z-index: 1;

  &:hover {
    opacity: 1;
  }
`;

const ArticleImage = styled(Img)`
  position: absolute !important;
  width: 100%;
  height: 100%;

  div {
    display: none;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    vertical-align: middle;
    position: absolute;
  }
`;

const GreetingContainer = styled.div`
  position: relative;
  grid-column-start: 1;
  grid-column-end: 4;
  padding: 75px 0;
  background: white;
  grid-column-end: span 12;
  ${mainGrid};
  color: ${primaryAccentColor};

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: ${rgba(primaryAccentColor, 0.1)};
    z-index: 0;
  }
`;

const Greeting = styled.div`
  grid-column-start: 3;
  grid-column-end: span 8;
  z-index: 1;
`;

const GreetingTitle = styled.h3`
  margin: 0;
  margin-bottom: 5px;
  font-size: 28px;
  font-weight: 500;
`;

const GreetingText = styled.p`
  margin: 0;
  line-height: 1.4;
  font-size: 28px;
  font-weight: 300;
`;

export default function Index({data}) {
  const {edges: posts} = data.allMarkdownRemark;

  return (
    <Container>
      <GreetingContainer>
        <Greeting>
          <GreetingTitle>Moin Moin</GreetingTitle>
          <GreetingText>
            Moin Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Assumenda velit, blanditiis facilis nostrum totam unde asperiores
            impedit autem amet dolor sequi ullam ipsa possimus voluptatibus
            obcaecati culpa dolores ex adipisci?
          </GreetingText>
        </Greeting>
      </GreetingContainer>
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({node: post}) => {
          const {id, frontmatter} = post;
          const {path, articleImagePath, title} = frontmatter;
          const {sizes} = articleImagePath.childImageSharp;

          sizes.sizes = '(max-width: 1400px) 30vw, 460px';

          return (
            <ArticleTeaser key={id} to={path}>
              <ArticleImage sizes={sizes} />
              <ArticleTeaserOverlay>{title}</ArticleTeaserOverlay>
            </ArticleTeaser>
          );
        })}
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
                sizes {
                  ...GatsbyImageSharpSizes_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;
