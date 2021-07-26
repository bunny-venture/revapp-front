import styled, { css } from 'styled-components';
import { ButtonType } from './types';

import { fontSize } from '../../../../utils/app-utils-config/Typography';
// import { appColors } from '../../../../utils/app-utils-config/Colors';

export const Button = styled.button<ButtonType>`
  cursor: pointer;
  border: none;

  ${(props: ButtonType) =>
    css`
      font-size: ${props.fontSize};
    `};

  ${(props: ButtonType) =>
    css`
      color: ${props.color};
    `};

  ${(props: ButtonType) =>
    css`
      background-color: ${props.backgroundColor};
    `};

  ${(props: ButtonType) =>
    css`
      padding: ${props.padding};
    `};

  ${(props: ButtonType) =>
    props.xlarge4 &&
    css`
      font-size: ${fontSize.large};
      padding: 1.125rem 2rem;
    `};

  ${(props: ButtonType) =>
    props.xlarge3 &&
    css`
      font-size: ${fontSize.base};
      padding: 1rem 1.75rem;
    `};

  ${(props: ButtonType) =>
    props.xlarge2 &&
    css`
      font-size: ${fontSize.base};
      padding: 0.875rem 1.5rem;
    `};

  ${(props: ButtonType) =>
    props.xlarge &&
    css`
      font-size: ${fontSize.base};
      padding: 0.75rem 1.25rem;
    `};

  ${(props: ButtonType) =>
    props.large &&
    css`
      font-size: ${fontSize.base};
      padding: 0.625rem 0.875rem;
    `};

  ${(props: ButtonType) =>
    props.base &&
    css`
      font-size: ${fontSize.small};
      padding: 0.5rem 1rem;
    `};

  ${(props: ButtonType) =>
    props.small &&
    css`
      font-size: ${fontSize.small};
      padding: 0.375rem 0.875rem;
    `};

  ${(props: ButtonType) =>
    props.xsmall &&
    css`
      font-size: ${fontSize.extraSmall};
      padding: 0.25rem 0.5rem;
    `};

  ${(props: ButtonType) =>
    props.rounded &&
    css`
      border-radius: 0.125rem;
    `};

  ${(props: ButtonType) =>
    props.rounded1 &&
    css`
      border-radius: 0.25rem;
    `};

  ${(props: ButtonType) =>
    props.rounded2 &&
    css`
      border-radius: 0.375rem;
    `};

  ${(props: ButtonType) =>
    props.rounded3 &&
    css`
      border-radius: 0.5rem;
    `};

  ${(props: ButtonType) =>
    props.rounded4 &&
    css`
      border-radius: 0.75rem;
    `};

  ${(props: ButtonType) =>
    props.rounded5 &&
    css`
      border-radius: 1rem;
    `};

  ${(props: ButtonType) =>
    props.rounded6 &&
    css`
      border-radius: 1.5rem;
    `};

  ${(props: ButtonType) =>
    props.roundedfull &&
    css`
      border-radius: 9999px;
    `};

  ${(props: ButtonType) =>
    props.primary &&
    css`
      border: 1px solid red;
      background-color: red;
    `};

  ${(props: ButtonType) =>
    props.secondary &&
    css`
      border-radius: 9999px;
    `};

  ${(props: ButtonType) =>
    props.outline &&
    css`
      border-radius: 9999px;
    `};
`;
