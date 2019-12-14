/* eslint-disable jsx-a11y/accessible-emoji */
import { Col, Layout, Row } from 'antd';
import * as React from 'react';
import styled from 'styled-components';

import { Header } from '../header/Header';
import { HomeHeader } from '../header/HomeHeader';

const { Content, Footer } = Layout;

const CustomLayout = styled(Layout)`
	/* padding: 10px; */
	background: var(--background);
	color: var(--text-color);
`;

interface Props {
	showHeader?: boolean;
}

export const BlogLayout: React.FC<Props> = ({ showHeader, children }) => {
	return (
		<CustomLayout>
			{showHeader && <HomeHeader />}
			<Content
				style={{
					padding: '0 25px',
					minHeight: 800
				}}
			>
				<Row style={{ marginTop: 20 }}>
					<Col span={24}>{children}</Col>
				</Row>
			</Content>
			<Footer style={{ background: 'var(--background)' }}>Made with ❤️ by Sercan ©2019 </Footer>
		</CustomLayout>
	);
};
