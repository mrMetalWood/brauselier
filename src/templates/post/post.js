import React from 'react';
import Helmet from 'react-helmet';

import Container from './Container';
import Title from './Title';
import BrandInfo from './BrandInfo';
import ImageContainer from './ImageContainer';
import Image from './Image';
import MetaContainer from './MetaContainer';
import Author from './Author';
import Date from './Date';
import Article from './Article';

export default function Template({data}) {
  const {markdownRemark: post} = data;
  const {frontmatter} = post;
  const {articleImagePath, title, brandInfo, date, author} = frontmatter;

  const {sizes} = articleImagePath.childImageSharp;
  sizes.sizes = '(max-width: 1400px) 30vw, 460px';

  return (
    <Container>
      <Helmet title={`Brauselier - ${title}`} />

      <Title>"{title}"</Title>

      <BrandInfo>{brandInfo}</BrandInfo>

      <ImageContainer>
        <Image sizes={sizes} alt={title} />
      </ImageContainer>

      <MetaContainer>
        <Author>von {author}</Author>
        <Date>{date}</Date>
      </MetaContainer>

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
            sizes(
              maxWidth: 800
              maxHeight: 800
              cropFocus: CENTER
              traceSVG: {
                color: "#4E4C5D"
                turnPolicy: TURNPOLICY_MINORITY
                blackOnWhite: false
              }
            ) {
              ...GatsbyImageSharpSizes_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`;
