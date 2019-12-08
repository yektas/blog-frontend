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
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	background: #393e46;
	border-bottom: 2px solid #29a19c;
`;

const NavLinkWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 35%;
	margin-left: 20%;
	height: 60px;
	padding: 20px;
`;

const PageLink = styled.div``;

export const HeaderComponent: React.FC<Props> = observer(() => {
	const [drawerVisible, setDrawerVisible] = React.useState(false);
	const [authModalVisible, setAuthModalVisible] = React.useState(false);
	const [shrink, setShrink] = React.useState(false);

	const resizeHeaderOnScroll = () => {
		const distanceY = window.pageYOffset || document.documentElement.scrollTop,
			shrinkOn = 50;
		if (distanceY > shrinkOn) {
			setShrink(true);
		} else {
			setShrink(false);
		}
	};

	// No condition
	React.useEffect(() => {
		window.addEventListener('scroll', resizeHeaderOnScroll);

		// clean up
		return () => window.removeEventListener('scroll', resizeHeaderOnScroll);
	}, []);
	return (
		<Nav>
			<NavLinkWrapper>
				<PageLink>
					<Title level={4}>HOME</Title>
				</PageLink>
				<PageLink>
					<Title level={4}>ABOUT</Title>
				</PageLink>
				<PageLink>
					<Title level={4}>PORTFOLIO</Title>
				</PageLink>
				<PageLink>
					<Title level={4}>BLOG</Title>
				</PageLink>
				<PageLink>
					<Title level={4}>ABOUT</Title>
				</PageLink>
			</NavLinkWrapper>
		</Nav>
		// <Wrapper className={shrink ? 'main-menu shrink' : 'main-menu'}>
		// 	<nav>
		// 		<ul>
		// 			<Link to="home" spy={true} smooth={true} duration={500}>
		// 				<li>
		// 					<Title level={4}>HOME</Title>
		// 				</li>
		// 			</Link>
		// 			<Link to="blog" spy={true} smooth={true} duration={500}>
		// 				<li>
		// 					<Title level={4}>BLOG</Title>
		// 				</li>
		// 			</Link>
		// 			<Link to="about" spy={true} smooth={true} offset={50} duration={500}>
		// 				<li>
		// 					<Title level={4}>ABOUT</Title>
		// 				</li>
		// 			</Link>
		// 			<Link to="portfolio" spy={true} smooth={true} offset={50} duration={500}>
		// 				<li>
		// 					<Title level={4}>PORTFOLIO</Title>
		// 				</li>
		// 			</Link>
		// 			<Link to="contact" spy={true} smooth={true} offset={50} duration={500}>
		// 				<li>
		// 					<Title level={4}>CONTACT</Title>
		// 				</li>
		// 			</Link>
		// 		</ul>
		// 	</nav>
		// </Wrapper>
		// <nav className="menu menu__home">
		// 	<div className="menu__logo">
		// 		<Col lg={4} md={5} sm={24} xs={24}>
		// 			<Link to="/">
		// 				<Logo src={lightLogo} alt="test" />
		// 			</Link>
		// 		</Col>
		// 	</div>

		// 	<div className="menu__container">
		// 		<div className="menu_left">
		// 			<LeftMenu mode="horizontal" theme="light" />
		// 		</div>
		// 		<div className="menu_right">
		// 			<RightMenu
		// 				mode="horizontal"
		// 				onLoginClick={() => setAuthModalVisible(true)}
		// 				onLoginCancel={() => setAuthModalVisible(false)}
		// 				authModalVisible={authModalVisible}
		// 			/>
		// 		</div>
		// 		<Button className="menu__mobile-button" onClick={() => setDrawerVisible(true)}>
		// 			<Icon type="menu" />
		// 		</Button>
		// 		<Drawer
		// 			title="Basic Drawer"
		// 			placement="right"
		// 			className="menu_drawer"
		// 			closable={false}
		// 			onClose={() => setDrawerVisible(false)}
		// 			visible={drawerVisible}
		// 		>
		// 			<LeftMenu mode="inline" />
		// 		</Drawer>
		// 	</div>
		// </nav>
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
