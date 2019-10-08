import * as React from 'react';
import { HighlightInput } from './HighlightInput';
import { Display } from './Display';
import { ContentPluginProps } from '@react-page/core/lib/service/plugin/classes';

interface Props extends React.ComponentClass<ContentPluginProps<any>> {
	readOnly: boolean;
	text: string;
	language: string;
	lineNumbers: false;
	onChange: (arg: any) => void;
}

export const SyntaxHighlighter: React.FC<Props> = (props) => {
	const { readOnly, text, language, lineNumbers, onChange } = props;
	const handleValueChange = (event: any) => {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		onChange({
			[name]: value
		});
	};

	const handleLanguageChange = (lang: any) => {
		onChange({
			language: lang
		});
	};
	return (
		<div>
			{readOnly ? (
				<Display {...props} />
			) : (
				<HighlightInput
					handleValueChange={(e) => handleValueChange(e)}
					handleLanguageChange={(e) => handleLanguageChange(e.target.value)}
					text={text}
					language={language}
					lineNumbers={lineNumbers}
				/>
			)}
		</div>
	);
};
