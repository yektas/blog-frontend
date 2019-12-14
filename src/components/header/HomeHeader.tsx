import './header.css';

import { BackTop, Button, Col, Drawer, Icon, Typography } from 'antd';
import { observer } from 'mobx-react-lite';
import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

import lightLogo from '../../assets/logo-light.png';
import { device } from '../../device';
import { useMediaQuery } from 'react-responsive';

import { withRouter } from 'react-router-dom';
const { Title } = Typography;

interface Props {}

const Nav = styled.nav`
	position: ${(props: any) => (props.sticky ? 'fixed' : 'relative')};
	top: 0;
	${(props: any) => props.sticky && 'bottom: inherit'};
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	background: #353b4b;
	border-bottom: 2px solid #f73859;
	z-index: 1;
` as any;

const NavLinkWrapper = styled.div<{ mobile?: boolean }>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: ${(props) => (props.mobile ? '100%' : '35%')};
	${(props) => !props.mobile && 'margin-left: 20%'};
	${(props) =>
		props.mobile &&
		`
		padding-left: 20px;
		padding-right: 20px;
	`};
	height: 50px;
`;

const PageLink = styled(ScrollLink)`
	font-size: 18px;
	font-weight: 500;
	font-family: 'Montserrat';
	color: rgba(255, 255, 255, 0.95);
	text-decoration: none;

	:hover {
		color: #f73859 !important;
	}
` as any;

const HamburgerButton = styled.div`
	&& {
		background: transparent;
		font-size: 16px;
		color: white;
		float: right;
	}
`;

const DrawerLink = styled(PageLink)`
	color: rgba(0, 0, 0, 0.95);
`;

export const HeaderComponent: React.FC<Props> = observer(() => {
	const [activeLink, setActiveLink] = React.useState('');
	const [drawerVisible, setDrawerVisible] = React.useState(false);
	const [stickyNav, setStickyNav] = React.useState(false);

	const links = ['HOME', 'ABOUT', 'PROJECTS', 'BLOG', 'CONTACT'];

	const isMobile = useMediaQuery({
		query: '(max-width: 767px)'
	});

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

	const renderMobileHeader = () => {
		return (
			<>
				<NavLinkWrapper mobile={isMobile}>
					<PageLink
						to="home"
						spy={true}
						smooth={true}
						duration={300}
						onClick={() => setActiveLink('home')}
					>
						<Logo src={lightLogo} />
					</PageLink>
					<HamburgerButton>
						<Icon type="menu" onClick={() => setDrawerVisible(true)} />
					</HamburgerButton>
				</NavLinkWrapper>
				<Drawer
					title="Menu"
					placement="right"
					closable={false}
					onClose={() => setDrawerVisible(false)}
					visible={drawerVisible}
				>
					{links.map((link) => {
						const to = link.toLowerCase();
						return (
							<div style={{ marginTop: 10, textAlign: 'center' }}>
								{to === 'blog' ? (
									<RouterLink to="blog">
										<h1>BLOG</h1>
									</RouterLink>
								) : (
									<>
										<DrawerLink
											to={to}
											spy={true}
											smooth={true}
											duration={300}
											key={link}
											onClick={() => {
												setActiveLink(link);
												setDrawerVisible(false);
											}}
											activeClass="link-active"
										>
											{link}
										</DrawerLink>
										<br />
									</>
								)}
							</div>
						);
					})}
				</Drawer>
			</>
		);
	};

	const renderDesktopHeader = () => {
		return (
			<NavLinkWrapper>
				<PageLink
					to="home"
					spy={true}
					smooth={true}
					duration={300}
					onClick={() => setActiveLink('home')}
				>
					<Logo src={lightLogo} />
				</PageLink>
				{links.map((link) => {
					const to = link.toLowerCase();
					return (
						<PageLink
							to={to}
							spy={true}
							smooth={true}
							duration={300}
							key={link}
							onClick={() => setActiveLink(link)}
							activeClass="link-active"
						>
							{link}
						</PageLink>
					);
				})}
			</NavLinkWrapper>
		);
	};

	return (
		<Nav sticky={stickyNav} className={stickyNav ? 'slide-bottom' : ''}>
			{isMobile ? renderMobileHeader() : renderDesktopHeader()}
		</Nav>
	);
});

const Logo = styled.img`
	width: 130px;

	@media ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
		width: 90px;
	}

	@media ${device.tablet} {
		max-width: 160px;
	}
`;

const HomeHeader = withRouter(HeaderComponent);

export { HomeHeader };
