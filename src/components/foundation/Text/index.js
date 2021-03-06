import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import propToStyle from '../../../theme/utils/propToStyle';

export const TextStyleVariantMap = {
  title: css`
     font-size: ${({ theme }) => theme.typographyVariants.titleXS.fontSize};
     font-weight: ${({ theme }) => theme.typographyVariants.titleXS.fontWeight};
     line-height: ${({ theme }) => theme.typographyVariants.titleXS.lineHeight};
  `,

  subTitle: css`
     font-size: ${({ theme }) => theme.typographyVariants.subTitle.fontSize};
     font-weight: ${({ theme }) => theme.typographyVariants.subTitle.fontWeight};
     line-height: ${({ theme }) => theme.typographyVariants.subTitle.lineHeight};
  `,

  paragraph1: css`
    font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.paragraph1.lineHeight};
  `,

  paragraph2: css`
     font-size: ${({ theme }) => theme.typographyVariants.paragraph2.fontSize};
     font-weight: ${({ theme }) => theme.typographyVariants.paragraph2.fontWeight};
     line-height: ${({ theme }) => theme.typographyVariants.paragraph2.lineHeight};
  `,

  titleXS: css`
     font-size: ${({ theme }) => theme.typographyVariants.titleXS.fontSize};
     font-weight: ${({ theme }) => theme.typographyVariants.titleXS.fontWeight};
     line-height: ${({ theme }) => theme.typographyVariants.titleXS.lineHeight};
  `,
};

export const TextColors = {
  primary: css`
    color: ${({ theme }) => theme.colors.primary.main.color};
  `,
  secondary: css`
    color: ${({ theme }) => theme.colors.secondary.main.color};
  `,
  tertiary: css`
    color: ${({ theme }) => theme.colors.tertiary.main.color};
  `,
};

const TextBase = styled.span`
  ${(props) => TextStyleVariantMap[props.variant]};
  ${propToStyle('textAlign')};
  ${propToStyle('width')};
  ${propToStyle('lineHeight')};
  ${(props) => TextColors[props.color]};
`;

export default function Text({
  tag, variant, children, ...props
}) {
  return (
    <TextBase
      as={tag}
      variant={variant}
      /* eslint-disable-next-line react/jsx-props-no-spreading */
      {...props}
    >
      {children}
    </TextBase>
  );
}

Text.propTypes = {
  tag: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
};
