import * as React from 'react';
import { Provider, Trash, DisplayModeToggle, Toolbar } from '@react-page/ui';
import slate, { slatePlugins } from '@react-page/plugins-slate';
import EditorUi from '@react-page/ui';
import { imagePlugin } from '@react-page/plugins-image';
import spacer from '@react-page/plugins-spacer';
import video from '@react-page/plugins-video';
import divider from '@react-page/plugins-divider';
import '@react-page/core/lib/index.css';
import '@react-page/plugins-image/lib/index.css';
import '@react-page/plugins-spacer/lib/index.css';
import '@react-page/plugins-slate/lib/index.css';
import '@react-page/ui/lib/index.css';
import Editor from '@react-page/editor';
import { createEmptyState, Editable } from '@react-page/core';
import { EditableType } from '@react-page/core/lib/types/editable';
import { RootStoreContext } from '../../store/RootStore';
import { observer } from 'mobx-react';
import HighlightPlugin from './plugins/highlight/HighlightPlugin';

interface Props {
	content?: EditableType;
}

interface IState {
	editorState: EditableType;
}

// this is the list of all default plugins, remove the ones you don't need
const slatePlugin = slate();

// Define which plugins we want to use. We only have slate and parallax available, so load those.
const plugins: any = {
	content: [slatePlugin, imagePlugin(), HighlightPlugin, video, spacer, divider]
};

interface Props {}

export const PostEditor: React.FC<Props> = () => {
	const [editorValue, setEditorValue] = React.useState(createEmptyState());

	return (
		<div style={{ paddingLeft: 100, paddingRight: 100 }}>
			<Editor plugins={plugins} value={editorValue} onChange={setEditorValue} />
		</div>
	);
};
