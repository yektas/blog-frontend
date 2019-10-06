import { Modal, Tabs } from 'antd';
import * as React from 'react';

import { LoginForm } from './LoginForm';

const TabPane = Tabs.TabPane;

interface Props {
	visible: boolean;
	onCancel: () => void;
	onOk?: () => void;
}

export const AuthModal: React.FC<Props> = (props) => {
	const { visible, onCancel, onOk } = props;
	return (
		<Modal visible={visible} footer={null} onCancel={onCancel} onOk={onOk}>
			<Tabs defaultActiveKey="1" onChange={() => null}>
				<TabPane tab="Login" key="1">
					<LoginForm />
				</TabPane>
				<TabPane tab="Register" key="2">
					{/* <RegisterForm /> */}
				</TabPane>
			</Tabs>
		</Modal>
	);
};
