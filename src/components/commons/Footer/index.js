import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Link from '../../navigation/Link';

const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.background.main.color};
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  a {
    color: ${({ theme }) => theme.colors.secondary.main.color};
    font-size: 25px;
    margin-left: 20px;
    margin-right: 20px;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <Link href="https://github.com/Imacedoo">
        <FaGithub />
      </Link>
      <Link href="https://www.instagram.com/imacedooo">
        <FaInstagram />
      </Link>
      <Link href="https://www.linkedin.com/in/igor-macedo-576311176">
        <FaLinkedin />
      </Link>
    </FooterWrapper>
  );
}
