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
import Editor, { createEmptyState, Editable } from '@react-page/core';
import { EditableType } from '@react-page/core/lib/types/editable';
import { RootStoreContext } from '../../store/RootStore';
import { observer } from 'mobx-react';

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

@observer
export class PostEditor extends React.Component<Props, IState> {
	static contextType = RootStoreContext;
	private editor: any;
	constructor(props: any) {
		super(props);
		this.state = { editorState: createEmptyState() };
		this.editor = new Editor({
			plugins,
			editables: [this.state.editorState],
			defaultPlugin: slate()
		});
	}

	handleChange(value: EditableType) {
		this.setState({ editorState: value }, () => {
			this.context.postStore.setContent(value);
		});
	}

	render() {
		return (
			<div style={{ paddingLeft: 100, paddingRight: 100 }}>
				<Editable
					editor={this.editor}
					id={this.state.editorState.id}
					onChange={(state: EditableType) => this.handleChange(state)}
				/>

				<Provider editor={this.editor}>
					<Trash />
					<DisplayModeToggle />
					<Toolbar />
				</Provider>
			</div>
		);
	}
}
