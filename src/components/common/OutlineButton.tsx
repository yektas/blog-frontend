import { Button as AntdButton } from 'antd';
import { ButtonProps, ButtonType } from 'antd/lib/button';
import * as React from 'react';
import styled from 'styled-components';

interface Props extends ButtonProps {}

const StyledButton = styled(AntdButton)`
	:hover {
		background: ${(props: any) => getBackgroundColor(props.type)} !important;
		color: ${(props: any) => getColor(props.type)} !important;
		border-color: ${(props: any) => getBorderColor(props.type)} !important;
	}
` as any;

const getBackgroundColor = (type: ButtonType) => {
	switch (type) {
		case 'primary':
			return '#1890ff';
		default:
			return;
	}
};

const getColor = (type: ButtonType) => {
	switch (type) {
		case 'primary':
			return '#fff';
		default:
			return;
	}
};

const getBorderColor = (type: ButtonType) => {
	switch (type) {
		case 'primary':
			return '#1890ff';
		default:
			return;
	}
};

export const OutlineButton: React.FC<Props> = (props) => {
	return (
		<StyledButton ghost {...props}>
			{props.children}
		</StyledButton>
	);
};
