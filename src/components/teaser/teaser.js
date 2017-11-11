import React from 'react';
import styled from 'styled-components';

import Link from './Link';
import Image from './Image';
import Overlay from './Overlay';

const Teaser = ({link, imageSizes, title}) => (
  <Link to={link}>
    <Image sizes={imageSizes} alt={title} />
    <Overlay>{title}</Overlay>
  </Link>
);

export default Teaser;
