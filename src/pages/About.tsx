import * as React from 'react';

import { BlogLayout } from '../components/layout/BlogLayout';

interface Props {}

export const About: React.FC<Props> = () => {
	return (
		<BlogLayout showHeader>
			<h1> About page </h1>
		</BlogLayout>
	);
};
