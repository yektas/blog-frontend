import { Col } from 'antd';
import * as React from 'react';

import { usePostsQuery } from '../../generated/graphql';
import { BlogItem } from '../common/skeletons/BlogItem';
import { SinglePost } from './SinglePost';

interface Props {}

const Skeletons = () => {
	const items = [];
	for (var i = 0; i < 3; i++) {
		items.push(
			<Col xs={24} sm={24} md={12} lg={12} xl={8} key={i}>
				<BlogItem />
			</Col>
		);
	}
	return <>{items}</>;
};

export const Posts: React.FC<Props> = () => {
	const { data, loading, error } = usePostsQuery();

	if (!data) {
		return <Skeletons />;
	}

	if (error) return <div>Error</div>;
	return (
		<>
			{data &&
				data.posts.map((post) => (
					<Col xs={24} sm={24} md={12} lg={12} xl={8}>
						<SinglePost post={post} />
					</Col>
				))}
		</>
	);
};
