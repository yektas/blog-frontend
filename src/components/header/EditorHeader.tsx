import './header.css';

import { Col, Layout, Row, Switch } from 'antd';
import { observer } from 'mobx-react-lite';
import React, { Component } from 'react';
import styled from 'styled-components';

import { RootStoreContext } from '../../store/RootStore';
import { UserMenu } from '../menu/UserMenu';

const { Header: AntHeader } = Layout;

const CustomHeader = styled(AntHeader)`
	background: var(--background);
`;

interface Props {}

export const EditorHeader: React.FC<Props> = observer(() => {
	const [authModalVisible, setAuthModalVisible] = React.useState(false);
	const [drawerVisible, setDrawerVisible] = React.useState(false);

	return (
		<CustomHeader>
			<Row>
				<Col span={2} offset={15}>
					<UserMenu />
				</Col>
				<Col span={2}></Col>
			</Row>
		</CustomHeader>
	);
});
