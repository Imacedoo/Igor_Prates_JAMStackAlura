import styled from 'styled-components';
import get from 'lodash/get';
import propToStyle from '../../../../theme/utils/propToStyle';

export default styled.div`
  ${propToStyle('display')}
  ${propToStyle('flexDirection')}
  ${propToStyle('justifyContent')}
  ${propToStyle('alignItems')}
  ${propToStyle('flex')}
  ${propToStyle('display')}
  ${propToStyle('flexWrap')}
  ${propToStyle('height')}
  ${propToStyle('margin')}
  ${propToStyle('width')}
  background-color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
`;
