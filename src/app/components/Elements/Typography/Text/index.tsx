import styled, { css } from 'styled-components';
import { TypographyTextType } from './types';
import {
  fontSize,
  fontWeight,
  fontFamily,
  lineHeight,
} from '../../../../../utils/app-utils-config/Typography';

export const Text = styled.p<TypographyTextType>`
  font-family: ${fontFamily.text};

  ${(props: TypographyTextType) =>
    css`
      font-size: ${props.fontSize};
    `};

  ${(props: TypographyTextType) =>
    css`
      color: ${props.color};
    `};

  ${(props: TypographyTextType) =>
    props.xs &&
    css`
      font-size: ${fontSize.extraSmall};
      line-height: ${lineHeight.lh4};
    `};

  ${(props: TypographyTextType) =>
    props.sm &&
    css`
      font-size: ${fontSize.small};
      line-height: ${lineHeight.lh5};
    `};

  ${(props: TypographyTextType) =>
    props.base &&
    css`
      font-size: ${fontSize.base};
      line-height: ${lineHeight.lh6};
    `};

  ${(props: TypographyTextType) =>
    props.lg &&
    css`
      font-size: ${fontSize.large};
      line-height: ${lineHeight.lh7};
    `};

  ${(props: TypographyTextType) =>
    props.xl &&
    css`
      font-size: ${fontSize.extraLarge};
      line-height: ${lineHeight.lh7};
    `};

  ${(props: TypographyTextType) =>
    props.xl2 &&
    css`
      font-size: ${fontSize.extraLarge2};
      line-height: ${lineHeight.lh8};
    `};

  ${(props: TypographyTextType) =>
    props.xl3 &&
    css`
      font-size: ${fontSize.extraLarge3};
      line-height: ${lineHeight.lh9};
    `};

  ${(props: TypographyTextType) =>
    props.xl4 &&
    css`
      font-size: ${fontSize.extraLarge4};
      line-height: ${lineHeight.lh9};
    `};

  ${(props: TypographyTextType) =>
    props.xl5 &&
    css`
      font-size: ${fontSize.extraLarge5};
      line-height: ${lineHeight.lhNone};
    `};

  ${(props: TypographyTextType) =>
    props.xl6 &&
    css`
      font-size: ${fontSize.extraLarge6};
      line-height: ${lineHeight.lhNone};
    `};

  ${(props: TypographyTextType) =>
    props.xl7 &&
    css`
      font-size: ${fontSize.extraLarge7};
      line-height: ${lineHeight.lhNone};
    `};

  ${(props: TypographyTextType) =>
    props.xl8 &&
    css`
      font-size: ${fontSize.extraLarge8};
      line-height: ${lineHeight.lhNone};
    `};

  ${(props: TypographyTextType) =>
    props.xl9 &&
    css`
      font-size: ${fontSize.extraLarge9};
      line-height: ${lineHeight.lhNone};
    `};

  ${(props: TypographyTextType) =>
    props.thin &&
    css`
      font-weight: ${fontWeight.thin};
    `};

  ${(props: TypographyTextType) =>
    props.extralight &&
    css`
      font-weight: ${fontWeight.extralight};
    `};

  ${(props: TypographyTextType) =>
    props.light &&
    css`
      font-weight: ${fontWeight.light};
    `};

  ${(props: TypographyTextType) =>
    props.normal &&
    css`
      font-weight: ${fontWeight.normal};
    `};

  ${(props: TypographyTextType) =>
    props.medium &&
    css`
      font-weight: ${fontWeight.medium};
    `};

  ${(props: TypographyTextType) =>
    props.semibold &&
    css`
      font-weight: ${fontWeight.semibold};
    `};

  ${(props: TypographyTextType) =>
    props.bold &&
    css`
      font-weight: ${fontWeight.bold};
    `};

  ${(props: TypographyTextType) =>
    props.extrabold &&
    css`
      font-weight: ${fontWeight.extrabold};
    `};

  ${(props: TypographyTextType) =>
    props.black &&
    css`
      font-weight: ${fontWeight.black};
    `};
  
  ${(props: TypographyTextType) =>
    props.noMarginBottom &&
    css`
      margin-bottom: 0;
    `};
`;
