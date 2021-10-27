import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const NavIcons = () => {
  return (
    <ActionGroup>
      <button>
        <Search size={24} />
      </button>
      <button>
        <Menu size={24} />
      </button>
    </ActionGroup>
  );
}

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <NavIcons />
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <DesktopNavWrapper>
          <NavIcons />
        </DesktopNavWrapper>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopLoginWrapper>
          <Button>Subscribe</Button>
          <a href="#">Already a subscriber?</a>
        </DesktopLoginWrapper>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  /* Hide the super header on desktop variants */
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-areas: 'nav logo login';
  align-items: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.laptopAndUp} {
    margin-top: 16px;
    margin-bottom: 81px;
    height: 100%;
  }
`;

const DesktopNavWrapper = styled.div`
  grid-area: nav;
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: revert;
  }
`;

const LogoWrapper = styled.div`
  grid-area: logo;

  @media ${QUERIES.laptopAndUp} {
    margin-top: -8px;
  }
`;

const DesktopLoginWrapper = styled.div`
  grid-area: login;
  display: none;
  justify-self: end;
  align-self: end;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  & > a {
    color: var(--color-gray-900);
    text-decoration: underline;
    font-family: var(--font-family-serif);
    font-size: ${14 / 16}rem;
    font-style: italic;
  }
`;

export default Header;
