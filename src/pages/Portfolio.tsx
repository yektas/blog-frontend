import * as React from 'react';
import { Element } from 'react-scroll';

interface Props {}

export const Portfolio: React.FC<Props> = () => {
	return (
		<Element name="portfolio" className="home-page-element">
			<h1>PORTFOLIO</h1>
			<hr style={{ width: '4%', height: 3, marginTop: -10, background: 'black' }} />
		</Element>
	);
};
