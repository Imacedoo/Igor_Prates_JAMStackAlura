import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';

// eslint-disable-next-line import/prefer-default-export
export const MenuWrapper = styled.nav`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background.main.color};
  display: flex;
  font-family: 'Open Sans', sans-serif;
  height: 80px;
  justify-content: space-around;
  margin-top: 18px;
  padding-left: 28px;
  padding-right: 28px;
  position: sticky;
  position: -webkit-sticky;
  top: 0;

  ${breakpointsMedia({
    md: css`
      justify-content: flex-start;
      margin-top: 32px;
      margin-left: auto;
      margin-right: auto;
      width: 100%;
      padding: 0 16px;
      max-width: 768px;
    `,
    lg: css`
      max-width: 1160px; 
    `,
    xl: css`
      max-width: 1222px;
    `,
  })}
`;

MenuWrapper.LeftSide = styled.div`
  padding: 0;
  margin: 0;
  order: 1;
  width: 30%;
`;

MenuWrapper.RighSideDesktop = styled.div`
  padding: 0;
  margin: 0;
  order: 2;
  width: 70%;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  a {
    color: #FFFFFF;
    display: block;
    margin: 0 0 0 20px;
    text-align: center;
    text-decoration: none;
    transition: 200ms ease-in-out;
  }

  ${breakpointsMedia({
    xs: css`
      display: none;
    `,
    md: css`
      display: flex;
    `,
  })}
`;

MenuWrapper.RighSideMobile = styled.div`
  padding: 0;
  margin: 0;
  order: 2;
  width: 70%;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  a {
    color: #FFFFFF;
    display: block;
    font-size: 20px;
    margin: 0 0 0 20px;
    text-align: center;
    text-decoration: none;
    transition: 200ms ease-in-out;
  }

  ${breakpointsMedia({
    xs: css`
      display: flex;
    `,
    md: css`
      display: none;
    `,
  })}
`;
