import styled from 'styled-components';
import propToStyle from '../../../../theme/utils/propToStyle';

export default styled.div`
  background-color: ${({ theme }) => theme.colors.primary.main.color};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 0 26px 5px 26px;
  margin: 10px auto;
  ${propToStyle('width')};
  ${propToStyle('display')};
  ${propToStyle('height')};
  
  a {
    color: ${({ theme }) => theme.colors.secondary.main.color};
    text-decoration: none;
  };
  
  a svg {
    font-size: 25px;
    position: relative;
    top: 5px;
  };
`;
