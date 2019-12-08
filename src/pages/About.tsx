import * as React from 'react';
import { Element } from 'react-scroll';

interface Props {}

export const About: React.FC<Props> = () => {
	return (
		<Element name="about" className="home-page-element">
			<h1>ABOUT</h1>
			<hr style={{ width: '4%', height: 4, marginTop: -10, background: 'black' }} />
		</Element>
	);
};
