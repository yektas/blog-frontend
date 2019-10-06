import { Button } from 'antd';
import { observer } from 'mobx-react-lite';
import * as React from 'react';

import { RootStoreContext } from '../../store/RootStore';

interface Props {
	onPublish: () => void;
}

export const PostSummary: React.FC<Props> = observer(({ onPublish }) => {
	const { postStore } = React.useContext(RootStoreContext);

	return (
		<div>
			<h1>{postStore.title}</h1>
			{postStore.tags.map((tag) => (
				<p key={tag}>{tag}</p>
			))}

			<Button type="primary" htmlType="submit" onClick={onPublish}>
				{' '}
				Publish Now!{' '}
			</Button>
		</div>
	);
});
