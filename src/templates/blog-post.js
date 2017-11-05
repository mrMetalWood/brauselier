import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Img from 'gatsby-image';

import {mainGrid} from '../global-styles/variables';

const Container = styled.div`${mainGrid};`;
const Title = styled.h1`
  grid-column-start: 3;
  grid-column-end: span 8;
  font-size: 40px;
`;
const BrandInfo = styled.div`
  grid-column-start: 3;
  grid-column-end: span 3;
  font-size: 24px;
  line-height: 1.5;
  font-weight: 300;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  position: relative;
  display: block;
  grid-column-start: 7;
  grid-column-end: span 4;
`;

const Image = styled(Img)`
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

const Meta = styled.div`
  grid-column-start: 3;
  grid-column-end: span 8;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
  margin-bottom: 15px;
`;

const Author = styled.div`
  font-size: 24px;
  font-weight: 600;
`;

const Date = styled.div`
  font-size: 24px;
  font-weight: 300;
`;

const Article = styled.div`
  grid-column-start: 3;
  grid-column-end: span 8;

  font-size: 24px;
  line-height: 1.5;
  font-weight: 300;

  img {
    width: 100%;
  }
`;

export default function Template({
  data // this prop will be injected by the GraphQL query we'll write in a bit
}) {
  const {markdownRemark: post} = data;
  const {frontmatter} = post;
  const {articleImagePath, title, brandInfo, date, author} = frontmatter;

  const {sizes} = articleImagePath.childImageSharp;
  sizes.sizes = '(max-width: 1400px) 30vw, 460px';

  return (
    <Container>
      <Helmet title={`Your Blog Name - ${title}`} />
      <Title>"{title}"</Title>
      <BrandInfo>{brandInfo}</BrandInfo>
      <ImageWrapper>
        <Image sizes={sizes} />
      </ImageWrapper>
      <Meta>
        <Author>von {author}</Author>
        <Date>{date}</Date>
      </Meta>
      <Article
        dangerouslySetInnerHTML={{
          __html: post.html
        }}
      />
    </Container>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path}}) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        author
        brandInfo
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
`;
