import * as React from 'react';
import { Element } from 'react-scroll';

interface Props {
	title: string;
}

export const BasePage: React.FC<Props> = ({ title, children }) => {
	return (
		<Element name={title.toLowerCase()} className="home-page-element">
			<h1>{title.toUpperCase()}</h1>
			<hr style={{ width: '4%', height: 4, marginTop: -10, background: 'black' }} />
			{children}
		</Element>
	);
};
