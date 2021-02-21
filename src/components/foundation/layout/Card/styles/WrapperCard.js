import styled from 'styled-components';

export default styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.background.secondary.color};
  flex-direction: column;
  margin: 10px;
  height: 340px;
  width: 270px;
`;
