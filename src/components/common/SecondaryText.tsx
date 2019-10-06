import { Typography } from 'antd';
import { TextProps } from 'antd/lib/typography/Text';
import React from 'react';
import styled from 'styled-components';

const { Text } = Typography;

const StyledText = styled(Text)`
	font-size: var(--secondary-text-size);
	color: var(--secondary-text-color);
	font-weight: ${(props: any) => (props.bold ? 'bold' : 'normal')};
	font-style: italic;
` as any;

interface Props extends TextProps {
	bold?: boolean;
}

export const SecondaryText: React.FC<Props> = ({ bold, children }) => {
	return <StyledText bold={bold}>{children}</StyledText>;
};
