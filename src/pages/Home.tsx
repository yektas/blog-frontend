import { Col, Row } from 'antd';
import React from 'react';

import { SectionTitle } from '../components/common/SectionTitle';
import { HomeLayout } from '../components/layout/HomeLayout';
import { Posts } from '../components/post/Posts';

interface Props {}

export const Home: React.FC<Props> = () => {
	// const { data, loading } = useUsersQuery({ fetchPolicy: 'network-only' });

	// if (!data) {
	// 	return <div>loading...</div>;
	// }
	return (
		<HomeLayout showHeader>
			<Row gutter={16} style={{ marginTop: 20 }}>
				<Col span={24}>
					<SectionTitle style={{ marginTop: 50, marginBottom: 25 }}>Popular Posts</SectionTitle>
					<Posts />
				</Col>
			</Row>
		</HomeLayout>
	);
};
