import styled, { css } from 'styled-components';
import get from 'lodash/get';
import propToStyle from '../../../theme/utils/propToStyle';

const ButtonDefault = css`
    background-color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
    color: ${(props) => get(props.theme, `colors.${props.variant}.contrastText`)};
`;

export default styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  font-family: 'Open Sans', sans-serif;
  opacity: 1;
  transition: opacity ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};
  ${ButtonDefault}
  &:hover,
  &:focus {
    opacity: .5;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: .2;
  }

  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `};
  
  ${propToStyle('margin')};
  ${propToStyle('display')};
  ${propToStyle('fontSize')};
`;
