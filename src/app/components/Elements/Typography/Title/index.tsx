import styled, { css } from 'styled-components';
import { TypographyTitleType } from './types';
import {
  fontSize,
  fontWeight,
  fontFamily,
  lineHeight,
} from '../../../../../utils/app-utils-config/Typography';

export const Title = styled.p<TypographyTitleType>`
  font-family: ${fontFamily.title};
  font-size: ${fontSize.extraLarge};
  line-height: ${lineHeight.lh7};

  ${(props: TypographyTitleType) =>
    css`
      font-size: ${props.fontSize};
    `};

  ${(props: TypographyTitleType) =>
    css`
      color: ${props.color};
    `};

  ${(props: TypographyTitleType) =>
    props.xl2 &&
    css`
      font-size: ${fontSize.extraLarge2};
      line-height: ${lineHeight.lh8};
    `};

  ${(props: TypographyTitleType) =>
    props.xl3 &&
    css`
      font-size: ${fontSize.extraLarge3};
      line-height: ${lineHeight.lh9};
    `};

  ${(props: TypographyTitleType) =>
    props.xl4 &&
    css`
      font-size: ${fontSize.extraLarge4};
      line-height: ${lineHeight.lh9};
    `};

  ${(props: TypographyTitleType) =>
    props.xl5 &&
    css`
      font-size: ${fontSize.extraLarge5};
      line-height: ${lineHeight.lhNone};
    `};

  ${(props: TypographyTitleType) =>
    props.xl6 &&
    css`
      font-size: ${fontSize.extraLarge6};
      line-height: ${lineHeight.lhNone};
    `};

  ${(props: TypographyTitleType) =>
    props.xl7 &&
    css`
      font-size: ${fontSize.extraLarge7};
      line-height: ${lineHeight.lhNone};
    `};

  ${(props: TypographyTitleType) =>
    props.xl8 &&
    css`
      font-size: ${fontSize.extraLarge8};
      line-height: ${lineHeight.lhNone};
    `};

  ${(props: TypographyTitleType) =>
    props.xl9 &&
    css`
      font-size: ${fontSize.extraLarge9};
      line-height: ${lineHeight.lhNone};
    `};

  ${(props: TypographyTitleType) =>
    props.thin &&
    css`
      font-weight: ${fontWeight.thin};
    `};

  ${(props: TypographyTitleType) =>
    props.extralight &&
    css`
      font-weight: ${fontWeight.extralight};
    `};

  ${(props: TypographyTitleType) =>
    props.light &&
    css`
      font-weight: ${fontWeight.light};
    `};

  ${(props: TypographyTitleType) =>
    props.normal &&
    css`
      font-weight: ${fontWeight.normal};
    `};

  ${(props: TypographyTitleType) =>
    props.medium &&
    css`
      font-weight: ${fontWeight.medium};
    `};

  ${(props: TypographyTitleType) =>
    props.semibold &&
    css`
      font-weight: ${fontWeight.semibold};
    `};

  ${(props: TypographyTitleType) =>
    props.bold &&
    css`
      font-weight: ${fontWeight.bold};
    `};

  ${(props: TypographyTitleType) =>
    props.extrabold &&
    css`
      font-weight: ${fontWeight.extrabold};
    `};

  ${(props: TypographyTitleType) =>
    props.black &&
    css`
      font-weight: ${fontWeight.black};
    `};

  ${(props: TypographyTitleType) =>
    props.noMarginBottom &&
    css`
      margin-bottom: 0;
    `};
`;
