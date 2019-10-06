import * as React from 'react';
import { Provider, Trash, DisplayModeToggle, Toolbar } from '@react-page/ui';
import slate, { slatePlugins } from '@react-page/plugins-slate';
import { imagePlugin } from '@react-page/plugins-image';
import spacer from '@react-page/plugins-spacer';
import native from '@react-page/plugins-default-native';
import video from '@react-page/plugins-video';
import divider from '@react-page/plugins-divider';
import '@react-page/core/lib/index.css';
import '@react-page/plugins-image/lib/index.css';
import '@react-page/plugins-spacer/lib/index.css';
import '@react-page/plugins-slate/lib/index.css';
import '@react-page/ui/lib/index.css';
import Editor, { createEmptyState, EditorProps, Editable } from '@react-page/core';
import { EditableType } from '@react-page/core/lib/types/editable';
import { RootStoreContext } from '../../store/RootStore';
import { observer } from 'mobx-react-lite';
import { PostStore } from '../../store/PostStore';

interface Props {
	content?: EditableType;
}

interface IState {
	editorState: EditableType;
}

// this is the list of all default plugins, remove the ones you don't need
const slatePlugin = slate();

// Define which plugins we want to use. We only have slate and parallax available, so load those.
const plugins = {
	content: [slatePlugin, imagePlugin(), video, spacer, divider],
	native
};

export const PostEditor: React.FC<Props> = observer(({ content }) => {
	const { postStore } = React.useContext(RootStoreContext);
	const [editorState, setEditorState] = React.useState<EditableType>(content || createEmptyState());
	const editor = new Editor({
		plugins: plugins,
		editables: [editorState],
		defaultPlugin: slate()
	});

	const handleChange = (value: EditableType) => {
		setEditorState(value);
		postStore.setContent(value);
	};

	return (
		<div style={{ paddingLeft: 100, paddingRight: 100 }}>
			<Editable
				editor={editor}
				id={editorState.id}
				onChange={(state: EditableType) => handleChange(state)}
			/>

			<Provider editor={editor}>
				<Trash />
				<DisplayModeToggle />
				<Toolbar />
			</Provider>
		</div>
	);
});
