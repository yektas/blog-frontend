import { Icon, Input, Tag, Tooltip } from 'antd';
import { observer } from 'mobx-react-lite';
import * as React from 'react';

import { RootStoreContext } from '../../store/RootStore';

interface Props {}

export const EditableTagGroup: React.FC<Props> = observer(() => {
	const { postStore } = React.useContext(RootStoreContext);
	const { tags } = postStore;

	const [inputVisible, setInputVisible] = React.useState(false);
	const [inputValue, setInputValue] = React.useState('');

	const inputRef: any = React.useRef(null);

	const handleClose = (removedTag: string) => {
		const tags = postStore.tags.filter((tag) => tag !== removedTag);
		postStore.setTags(tags);
	};

	const showInput = () => {
		setInputVisible(true);
		if (inputRef.current) {
			inputRef.current.focus();
		}
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	const handleInputConfirm = () => {
		let tags = postStore.tags;
		if (inputValue && tags.indexOf(inputValue) === -1) {
			tags = [...tags, inputValue];
		}
		postStore.setTags(tags);
		setInputVisible(false);
		setInputValue('');
	};

	return (
		<div>
			{tags.map((tag, index) => {
				const isLongTag = tag.length > 20;
				const tagElem = (
					<Tag key={tag} closable={true} onClose={() => handleClose(tag)}>
						{isLongTag ? `${tag.slice(0, 20)}...` : tag}
					</Tag>
				);
				return isLongTag ? (
					<Tooltip title={tag} key={tag}>
						{tagElem}
					</Tooltip>
				) : (
					tagElem
				);
			})}
			{inputVisible && (
				<Input
					ref={inputRef}
					type="text"
					size="small"
					style={{ width: 78 }}
					value={inputValue}
					onChange={(e) => handleInputChange(e)}
					onPressEnter={(e) => handleInputConfirm()}
				/>
			)}
			{!inputVisible && tags.length < 5 && (
				<Tag onClick={(e) => showInput()} color="blue" style={{ background: '#fff' }}>
					<Icon type="plus" /> New Tag
				</Tag>
			)}
		</div>
	);
});
