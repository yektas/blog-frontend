import { Menu } from 'antd';
import { MenuProps } from 'antd/lib/menu';
import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
	mode?: 'vertical' | 'vertical-left' | 'vertical-right' | 'horizontal' | 'inline' | undefined;
}

const CustomMenu = styled(Menu)<MenuProps>`
	background: ${(props: any) => (props.mode === 'horizontal' ? 'var(--background)' : 'null')};
	border-bottom: 0;
	font-family: 'Montserrat', sans-serif;
	transition: none;
	font-weight: 500;
` as any;

const CustomMenuItem = styled(Menu.Item)`
	color: ${(props: any) => (props.mode === 'horizontal' ? 'var(--text-color)' : 'null')};
	font-size: 16px;
	flex: 1;
`;

export const LeftMenu: React.FC<Props> = ({ mode }) => {
	return (
		<CustomMenu mode={mode} triggerSubMenuAction="click">
			<CustomMenuItem>
				<Link to="/" />
				HOME
			</CustomMenuItem>
			<CustomMenuItem>
				<Link to="/blog" />
				BLOG
			</CustomMenuItem>
			<CustomMenuItem>
				<Link to="/about" />
				ABOUT
			</CustomMenuItem>
			<CustomMenuItem>
				<Link to="/portfolio" />
				PORTFOLIO
			</CustomMenuItem>
		</CustomMenu>
	);
};
