import * as React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface Props {
	text?: string;
	language?: string;
	lineNumbers: boolean;
}

export const Display: React.FC<Props> = ({ text, language, lineNumbers }) => {
	return (
		<SyntaxHighlighter
			language={language || 'javascript'}
			showLineNumbers={lineNumbers || false}
			style={monokaiSublime}
		>
			{text || 'Switch into edit mode then paste your sourcecode here...'}
		</SyntaxHighlighter>
	);
};
