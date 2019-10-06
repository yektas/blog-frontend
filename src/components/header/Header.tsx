import './header.css';

import { Button, Col, Drawer, Icon } from 'antd';
import { observer } from 'mobx-react-lite';
import React, { Component } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import darkLogo from '../../assets/logo-dark.png';
import lightLogo from '../../assets/logo-light.png';
import { device } from '../../device';
import { RootStoreContext } from '../../store/RootStore';
import { LeftMenu } from './LeftMenu';
import { RightMenu } from './RightMenu';

interface Props {}

const Desktop = (children: React.ReactNode) => {
	const isDesktop = useMediaQuery({ minWidth: 992 });
	return isDesktop ? children : null;
};
const Tablet = (children: React.ReactNode) => {
	const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
	return isTablet ? children : null;
};
const Mobile = (children: React.ReactNode) => {
	const isMobile = useMediaQuery({ maxWidth: 767 });
	return isMobile ? children : null;
};
const Default = (children: React.ReactNode) => {
	const isNotMobile = useMediaQuery({ minWidth: 768 });
	return isNotMobile ? children : null;
};

export const HeaderComponent: React.FC<Props> = observer(() => {
	const { styleStore, userStore } = React.useContext(RootStoreContext);
	const [authModalVisible, setAuthModalVisible] = React.useState(false);
	const [drawerVisible, setDrawerVisible] = React.useState(false);

	// componentDidMount() {
	// 	this.setState(
	// 		{
	// 			theme: this.state.theme
	// 		},
	// 		this.setTheme(this.state.theme)
	// 	);
	// }

	return (
		<nav className="menu">
			<div className="menu__logo">
				<Col lg={4} md={5} sm={24} xs={24}>
					<Link to="/">
						<Logo src={styleStore.theme === 'dark' ? lightLogo : darkLogo} alt="test" />
					</Link>
				</Col>
			</div>

			<div className="menu__container">
				<div className="menu_left">
					<LeftMenu mode="horizontal" />
				</div>
				<div className="menu_right">
					<RightMenu
						mode="horizontal"
						onLoginClick={() => setAuthModalVisible(true)}
						onLoginCancel={() => setAuthModalVisible(false)}
						authModalVisible={authModalVisible}
					/>
				</div>
				<Button className="menu__mobile-button" onClick={() => setDrawerVisible(true)}>
					<Icon type="menu" />
				</Button>
				<Drawer
					title="Basic Drawer"
					placement="right"
					className="menu_drawer"
					closable={false}
					onClose={() => setDrawerVisible(false)}
					visible={drawerVisible}
				>
					<LeftMenu mode="inline" />
					<RightMenu
						mode="inline"
						onLoginClick={() => setAuthModalVisible(true)}
						onLoginCancel={() => setAuthModalVisible(false)}
						authModalVisible={authModalVisible}
					/>
				</Drawer>
			</div>
		</nav>
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

const Header = withRouter(HeaderComponent);

export { Header };
