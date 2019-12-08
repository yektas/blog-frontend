import { Dropdown, Icon, Menu, Switch } from 'antd';
import { ButtonProps } from 'antd/lib/button';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { RootStoreContext } from '../../store/RootStore';
import { AuthModal } from '../auth/AuthModal';
import { OutlineButton } from '../common/OutlineButton';
import { UserMenu } from '../menu/UserMenu';

interface Props extends ButtonProps {
	mode: string;
	authModalVisible: boolean;
	onLoginCancel: () => void;
	onLoginClick: () => void;
}

const CustomMenu = styled(Menu)`
	background: ${(props) => (props.mode === 'horizontal' ? 'var(--background)' : 'null')};
	border-bottom: 0;
	font-family: 'Montserrat', sans-serif;
	transition: none;
	font-weight: 500;
` as any;

const CustomMenuItem = styled(Menu.Item)`
	color: var(--text-color);
	font-size: 16px;
	flex: 1;
`;

// const menu = (
// 	<CustomMenu>
// 		<CustomMenuItem key="1">
// 			<Icon type="user" />
// 			1st menu item
// 		</CustomMenuItem>
// 		<CustomMenuItem key="2">
// 			<Icon type="user" />
// 			2nd menu item
// 		</CustomMenuItem>
// 		<CustomMenuItem key="3">
// 			<Icon type="user" />
// 			3rd item
// 		</CustomMenuItem>
// 	</CustomMenu>
// );

export const RightMenu: React.FC<Props> = observer((props) => {
	const { styleStore, userStore } = React.useContext(RootStoreContext);
	const user = userStore.user;
	const { mode, onLoginCancel, onLoginClick, authModalVisible } = props;
	return (
		<CustomMenu mode={mode} triggerSubMenuAction="click">
			{user.id ? (
				<UserMenu />
			) : (
				<CustomMenuItem>
					<Link to="#" />
					<OutlineButton type="primary" onClick={onLoginClick}>
						Login
					</OutlineButton>
					<AuthModal visible={authModalVisible} onCancel={onLoginCancel} />
				</CustomMenuItem>
			)}
		</CustomMenu>
	);
});
