export const themes = {
	dark: {
		'text-color': 'rgba(255, 255, 255, 0.89)',
		'secondary-text-color': 'rgba(255, 255, 255, 0.5)',
		'header-shadow-color': '#1c1c1c',
		background: '#262628',
		'heading-color': 'rgba(255, 255, 255, 0.89)'
	},
	light: {
		'text-color': 'rgba(0,0,0,0.84)',
		'secondary-text-color': 'rgba(0, 0, 0, 0.65)',
		'header-shadow-color': '#f0f1f2',
		background: '#ffff',
		'heading-color': 'rgba(0,0,0,0.84)'
	}
};

export function changeTheme(theme: string) {
	setCssVariablesOfTheme(theme);
}

function setCssVariablesOfTheme(theme: string) {
	Object.keys((themes as any)[theme]).forEach((key) => {
		const cssKey = `--${key}`;
		const cssValue = (themes as any)[theme][key];
		document.body.style.setProperty(cssKey, cssValue);
	});
}
