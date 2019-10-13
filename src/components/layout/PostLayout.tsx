/* eslint-disable jsx-a11y/accessible-emoji */
import { Col, Row } from 'antd';
import * as React from 'react';
import { useMediaQuery, MediaQueryProps } from 'react-responsive';

// const Desktop = ({ children }) => {
// 	const isDesktop = useMediaQuery({ minWidth: 992 });
// 	return isDesktop ? children : null;
// };

const Default = (props: MediaQueryProps) => {
	const isNotMobile = useMediaQuery({ minWidth: 768 });

	return isNotMobile ? <div>{props.children}</div> : <></>;
};

// const Tablet = ({ children }) => {
// 	const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
// 	return isTablet ? children : null;
// };

const Mobile = (props: MediaQueryProps) => {
	const isMobile = useMediaQuery({ maxWidth: 767 });
	return isMobile ? <div>{props.children}</div> : <></>;
};

export const PostLayout: React.FC = ({ children }) => {
	return (
		<Row>
			<Default>
				<Col span={12} offset={6}>
					{children}
				</Col>
			</Default>
			<Mobile>
				<Col span={24}>{children}</Col>
			</Mobile>
		</Row>
	);
};
