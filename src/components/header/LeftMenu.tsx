import { Menu, Typography } from 'antd';
import { MenuProps } from 'antd/lib/menu';
import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const { Text } = Typography;

interface Props {
	mode?: 'vertical' | 'vertical-left' | 'vertical-right' | 'horizontal' | 'inline' | undefined;
	theme?: 'light' | 'dark' | undefined;
}

const CustomMenu = styled(Menu)<MenuProps>`
	background: ${(props: any) => (props.mode === 'horizontal' ? 'var(--background)' : 'null')};
	border-bottom: 0;
	font-family: 'Montserrat', sans-serif;
	transition: none;
	font-weight: 500;
` as any;

const CustomMenuItem = styled(Menu.Item)`
	color: ${(props: any) => (props.theme === 'light' ? '#ffff' : 'black')};
	font-size: 16px;
	flex: 1;
`;

const whiteText = {
	color: 'white'
};

export const LeftMenu: React.FC<Props> = ({ mode, theme }) => {
	return (
		<CustomMenu mode={mode} triggerSubMenuAction="click">
			<CustomMenuItem theme={theme}>
				<Link to="/">
					<Text>HOME</Text>
				</Link>
			</CustomMenuItem>
			<CustomMenuItem>
				<Link to="blog">
					<Text>BLOG</Text>
				</Link>
			</CustomMenuItem>
			<CustomMenuItem>
				<Link to="about">
					<Text>ABOUT</Text>
				</Link>
			</CustomMenuItem>
			<CustomMenuItem>
				<Link to="portfolio">
					<Text>PORTFOLIO</Text>
				</Link>
			</CustomMenuItem>
		</CustomMenu>
	);
};
