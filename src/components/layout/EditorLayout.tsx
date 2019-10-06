/* eslint-disable jsx-a11y/accessible-emoji */
import { Col, Layout, Row } from 'antd';
import * as React from 'react';
import styled from 'styled-components';

import { EditorHeader } from '../header/EditorHeader';

const { Content, Footer } = Layout;

const CustomLayout = styled(Layout)`
	padding: 10px;
	background: var(--background);
	color: var(--text-color);
`;

interface Props {
	leftColumn?: React.ReactNode;
	rightColumn?: React.ReactNode;
}

export const EditorLayout: React.FC<Props> = ({ leftColumn, rightColumn, children }) => {
	return (
		<CustomLayout>
			<EditorHeader />
			<Content
				style={{
					padding: '0 50px',
					minHeight: 1080
				}}
			>
				<Row style={{ marginBottom: 50 }}>
					<Col style={{ height: 500, textAlign: 'center' }} span={5}>
						{leftColumn}
					</Col>
					<Col span={14}>{children}</Col>
					<Col style={{ height: 500, textAlign: 'center' }} span={5}>
						{rightColumn}
					</Col>
				</Row>
			</Content>
			<Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
		</CustomLayout>
	);
};
