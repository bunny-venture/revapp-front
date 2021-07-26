import styled, { css } from 'styled-components';
import { WrapperType } from './types';

export const Wrapper = styled.div<WrapperType>`
  ${(props: WrapperType) =>
    props.flex &&
    css`
      display: flex;
    `};

  ${(props: WrapperType) =>
    css`
      flex-direction: ${props.flexDirection};
    `};

  ${(props: WrapperType) =>
    css`
      justify-content: ${props.justifyContent};
    `};

  ${(props: WrapperType) =>
    css`
      align-items: ${props.alignItems};
    `};

  ${(props: WrapperType) =>
    css`
      height: ${props.height};
    `};

  ${(props: WrapperType) =>
    css`
      width: ${props.width};
    `};

  ${(props: WrapperType) =>
    css`
      & > * + * {
        margin-left: ${props.spaceX};
      }
    `};

  ${(props: WrapperType) =>
    css`
      & > * + * {
        margin-top: ${props.spaceY};
      }
    `};
`;
