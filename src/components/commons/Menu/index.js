import React from 'react';
import Link from 'next/link';
import { FaHome, FaBars } from 'react-icons/fa';
import { MenuWrapper } from './styles/MenuWrapper';
import Logo from '../../../theme/Logo';
import Button from '../Button';

export default function Menu() {
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.RighSideDesktop>
        <Link href="/">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a style={{ fontSize: '25px' }}><FaHome /></a>
        </Link>
        <Link href="/sobre-mim">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a>Sobre mim</a>
        </Link>
        <Link href="/sobre-mim">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a>Contatos</a>
        </Link>
        <Button variant="primary.main" margin="20px">Portfólio</Button>
      </MenuWrapper.RighSideDesktop>
      <MenuWrapper.RighSideMobile>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#">
          <FaBars />
        </a>
      </MenuWrapper.RighSideMobile>
    </MenuWrapper>
  );
}
