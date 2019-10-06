import { Typography } from 'antd';
import * as React from 'react';
import { Link } from 'react-router-dom';

const { Title: AntdTitle } = Typography;

interface Props {
	title: string;
	slug: string;
}

export const Title: React.FC<Props> = ({ title, slug }) => {
	return (
		<AntdTitle level={3}>
			<Link to={`/blog/post/${slug}`}>{title}</Link>
		</AntdTitle>
	);
};
