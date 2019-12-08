import { Avatar, Col, Icon, Row } from 'antd';
import { format } from 'date-fns';
import * as React from 'react';

import { Author, Date, Image, Title } from './components';
import styled from 'styled-components';

interface Props {
	post: any;
}

export const SinglePost: React.FC<Props> = ({ post }) => {
	return (
		<div>
			<Image image={post.image} tag="Python" slug={post.slug} />
			<Title title={post.title} slug={post.slug}></Title>
			<Row type="flex" justify="start">
				<Col>
					<Author>
						<Avatar src="https://i.pravatar.cc/32" style={{ marginRight: 5, marginBottom: 5 }} />
						{post.author.firstName} {post.author.lastName}
					</Author>
				</Col>
				<Col style={{ marginLeft: 8, marginTop: 2 }}>
					<Date>
						<Icon type="clock-circle" style={{ marginRight: 5 }} />
						{format(post.publishedOn, 'MMM DD, YYYY')}
					</Date>
				</Col>
			</Row>
		</div>
	);
};
