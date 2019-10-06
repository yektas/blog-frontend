import './header.css';

import { Col, Layout, Row, Switch } from 'antd';
import { observer } from 'mobx-react-lite';
import React, { Component } from 'react';
import styled from 'styled-components';

import { RootStoreContext } from '../../store/RootStore';
import { changeTheme } from '../../utils/changeTheme';
import { UserMenu } from '../menu/UserMenu';

const { Header: AntHeader } = Layout;

const CustomHeader = styled(AntHeader)`
	background: var(--background);
`;

interface Props {}

export const EditorHeader: React.FC<Props> = observer(() => {
	const { styleStore } = React.useContext(RootStoreContext);
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
	const toggleTheme = () => {
		if (styleStore.theme === 'dark') {
			styleStore.setTheme('light');
			changeTheme('light');
		} else {
			styleStore.setTheme('dark');
			changeTheme('dark');
		}
	};

	return (
		<CustomHeader>
			<Row>
				<Col span={2}>
					<Switch
						checked={styleStore.theme === 'dark'}
						onChange={toggleTheme}
						checkedChildren="Dark"
						unCheckedChildren="Light"
					/>
				</Col>
				<Col span={2} offset={15}>
					<UserMenu />
				</Col>
				<Col span={2}></Col>
			</Row>
		</CustomHeader>
	);
});
