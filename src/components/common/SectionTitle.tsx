import { Typography } from 'antd';
import { BlockProps } from 'antd/lib/typography/Base';
import React from 'react';
import styled from 'styled-components';

const { Title: AntTitle } = Typography;

const Title = styled(AntTitle)`
	text-transform: uppercase;
`;

const SectionTitle: React.SFC<BlockProps> = (props) => {
	return (
		<Title {...props} level={4}>
			{props.children}
		</Title>
	);
};

export { SectionTitle };
