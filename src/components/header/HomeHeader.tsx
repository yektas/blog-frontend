import './header.css';

import { BackTop, Button, Col, Drawer, Icon, Typography } from 'antd';
import { observer } from 'mobx-react-lite';
import React, { Component, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-scroll';

import lightLogo from '../../assets/logo-light.png';
import { device } from '../../device';
import { LeftMenu } from './LeftMenu';
import { RightMenu } from './RightMenu';
const { Title } = Typography;

interface Props {}

const Wrapper = styled.div`
	z-index: 1;
	padding-top: 30px;
	opacity: 1;
	margin-left: auto;
	margin-right: auto;
	text-align: center;
	color: #ffff;
`;

const Nav = styled.nav`
	position: ${(props: any) => (props.sticky ? 'fixed' : 'relative')};
	top: 0;
	${(props: any) => props.sticky && 'bottom: inherit'};
	left: 0;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	background: #353b4b;
	border-bottom: 2px solid #f73859;
	z-index: 1;
` as any;

const NavLinkWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 35%;
	margin-left: 20%;
	height: 50px;
`;

const PageLink = styled(Link)`
	font-size: 18px;
	font-weight: 500;
	font-family: 'Montserrat';
	color: rgba(255, 255, 255, 0.95);
	text-decoration: none;

	:hover {
		color: #f73859 !important;
	}
` as any;

export const HeaderComponent: React.FC<Props> = observer(() => {
	const [activeLink, setActiveLink] = React.useState('');
	const [stickyNav, setStickyNav] = React.useState(false);

	const links = ['HOME', 'ABOUT', 'PORTFOLIO', 'BLOG', 'CONTACT'];

	const resizeHeaderOnScroll = () => {
		const distanceY = window.pageYOffset || document.documentElement.scrollTop,
			stickyNavOn = window.innerHeight - 52;
		if (distanceY > stickyNavOn) {
			setStickyNav(true);
		} else {
			setStickyNav(false);
		}
	};

	// No condition
	React.useEffect(() => {
		window.addEventListener('scroll', resizeHeaderOnScroll);
		// clean up
		return () => window.removeEventListener('scroll', resizeHeaderOnScroll);
	}, []);
	return (
		<Nav sticky={stickyNav} className={stickyNav ? 'slide-bottom' : ''}>
			<NavLinkWrapper>
				{/*TODO make it responsive */}
				<Logo src={lightLogo} />
				{links.map((link) => {
					const to = link.toLowerCase();
					return (
						<PageLink
							to={to}
							spy={true}
							smooth={true}
							duration={500}
							key={link}
							onClick={() => setActiveLink(link)}
							activeClass="link-active"
						>
							{link}
						</PageLink>
					);
				})}
			</NavLinkWrapper>
		</Nav>
	);
});

const Logo = styled.img`
	width: 130px;

	@media ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
		width: 130px;
	}

	@media ${device.tablet} {
		max-width: 160px;
	}
`;

const HomeHeader = withRouter(HeaderComponent);

export { HomeHeader };
