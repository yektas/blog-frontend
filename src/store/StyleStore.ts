import { action, observable } from 'mobx';
import { createContext } from 'react';

import { RootStore } from './RootStore';

export class StyleStore {
	rootStore: RootStore;

	constructor(rootStore: RootStore) {
		this.rootStore = rootStore;
	}

	@observable theme: string | 'dark' | 'light' = 'dark';

	toggleTheme() {
		if (this.theme === 'dark') {
			this.theme = 'light';
		} else {
			this.theme = 'dark';
		}
	}

	@action
	setTheme(theme: string) {
		this.theme = theme;
	}
}
