import { Avatar, Dropdown, Menu } from 'antd';
import * as React from 'react';
import { Link } from 'react-router-dom';

interface Props {}

export const UserMenu: React.FC<Props> = () => {
	const menu = (
		<Menu style={{ minWidth: 120 }}>
			<Menu.Item key="0">
				<Link to="/blog/new-post">New post</Link>
			</Menu.Item>
			<Menu.Item key="1">
				<a href="http://www.taobao.com/">Your posts</a>
			</Menu.Item>
			<Menu.Item key="2">
				<a href="http://www.taobao.com/">View profile</a>
			</Menu.Item>
			<Menu.Divider />
			<Menu.Item key="3">
				<span style={{ color: '#e94828' }}>Logout</span>
			</Menu.Item>
		</Menu>
	);
	return (
		<Dropdown overlay={menu} trigger={['click']}>
			<Avatar style={{ backgroundColor: '#e94828' }} icon="user" />
		</Dropdown>
	);
};
