import { Col, Row } from 'antd';
import React from 'react';

import { SectionTitle } from '../components/common/SectionTitle';
import { BlogLayout } from '../components/layout/BlogLayout';
import { Posts } from '../components/post/Posts';

interface Props {}

export const Blog: React.FC<Props> = () => {
	// const { data, loading } = useUsersQuery({ fetchPolicy: 'network-only' });

	// if (!data) {
	// 	return <div>loading...</div>;
	// }
	return (
		<BlogLayout showHeader>
			<Row gutter={16} style={{ marginTop: 20 }}>
				<Col offset={6} span={12}>
					<SectionTitle style={{ marginTop: 50, marginBottom: 25 }}>Popular Posts</SectionTitle>
					<Posts />
				</Col>
			</Row>
		</BlogLayout>
	);
};
