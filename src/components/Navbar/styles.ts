import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

export const Nav = styled.div`
    background-color: #18191A;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem 0 2rem;
`;

export const NavLogo = styled.img`
    width: 69px;
    height: 69px;
`;

export const MenuBar = styled(FaIcons.FaBars)`
    font-size: 2rem;
    background: none;
    color: #ffffff;

    @media only screen and (min-width: 660px) {
        display: none;
    }
`;

export const DesktopMenu = styled.div`
    width: 30rem;
    margin-left: 2rem;
    color: #ffffff;
    display: flex;
    justify-content: space-between;
    display: none;

    @media only screen and (min-width: 660px) {
        display: flex;
    }
`;

export const MenuItems = styled(NavLink)`
    padding: 0.75rem;
    border-radius: 0.25rem;
    color: #ffffff;
    text-decoration: none;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: #1a83ff;
    }

    &.active {
        background-color: #1a83ff;
    }
`;

export const MobileNav = styled.div<{isActive:boolean}>`
    background-color: #18191A;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: fixed;
    top: ${({ isActive }) => (isActive ? '0%' : '-200%')};
    transition: 750ms;
`;

export const MobileMenuClose = styled.div`
    background-color: #18191A;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const MenuClose = styled(AiIcons.AiOutlineClose)`
    margin-right: 2rem;
    font-size: 2rem;
    background: none;
    color: #ffffff;
`;

export const MobileMenuItems = styled(NavLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 8px 16px 8px 16px;
    list-style: none;
    height: 45px;
    text-decoration: none;
    color: #ffffff;
    border-radius: 0.25rem;

    &:hover {
        background-color: #1a83ff;
    }

    &.active {
        background-color: #1a83ff;
    }
`;
