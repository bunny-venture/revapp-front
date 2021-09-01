import React from 'react';
import styled from 'styled-components';

import BrandNameSVG from '../../../../assets/logos/brand_name.svg';

export function BrandName() {
  return <StyledBrandName src={BrandNameSVG} alt="Avatar" />;
}

const StyledBrandName = styled.img`
  width: 7rem;
  margin-left: 0.5rem;
`;
