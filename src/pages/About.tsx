import * as React from 'react';

import { HomeLayout } from '../components/layout/HomeLayout';

interface Props {}

export const About: React.FC<Props> = () => {
	return (
		<HomeLayout showHeader>
			<h1> About page </h1>
		</HomeLayout>
	);
};
