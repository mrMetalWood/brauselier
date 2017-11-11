import styled from 'styled-components';
import Img from 'gatsby-image';

export default styled(Img)`
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
