import './editor.css';

import { Col, Icon, Modal, Steps } from 'antd';
import * as React from 'react';
import styled from 'styled-components';

import { ChooseCategory } from './ChooseCategory';
import { CoverImageUpload } from './CoverImageUpload';
import { PostSummary } from './PostSummary';
import { EditableTagGroup } from './TagSelector';

const Step = styled(Steps.Step)`
	  :hover {
		cursor: pointer;
	}
`;
interface Props {
	visible: boolean;
	onPublish: () => void;
	onCancel: () => void;
}

export const PostDetailsForm: React.FC<Props> = ({ visible, onPublish, onCancel }) => {
	const [current, setCurrent] = React.useState(0);
	const steps = [
		{
			key: 0,
			title: 'Cover Image',
			description: 'Select a cover image',
			icon: 'picture',
			content: <CoverImageUpload />
		},
		{
			key: 1,
			title: 'Category',
			description: 'Choose a category',
			icon: 'project',
			content: <ChooseCategory />
		},
		// {
		// 	key: 2,
		// 	title: 'Tags',
		// 	description: 'Choose your tags',
		// 	icon: 'tags',
		// 	content: <EditableTagGroup />
		// },
		{
			key: 2,
			title: 'Submit',
			description: 'Preview your post',
			icon: 'check',
			content: <PostSummary onPublish={onPublish} />
		}
	];
	return (
		<Modal visible={visible} footer={null} className="full-page-modal" onCancel={onCancel}>
			<Col span={24}>
				<Steps current={current}>
					{steps.map((item) => (
						<Step
							key={item.key}
							title={item.title}
							description={item.description}
							onClick={() => current !== item.key && setCurrent(item.key)}
							icon={<Icon type={item.icon} />}
						/>
					))}
				</Steps>
			</Col>
			<Col span={24} className="steps-content">
				{steps[current].content}
			</Col>
		</Modal>
	);
};
