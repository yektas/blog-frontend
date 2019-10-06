import { createContext } from 'react';

import { PostStore } from './PostStore';
import { StyleStore } from './StyleStore';
import { UserStore } from './UserStore';

export class RootStore {
	userStore = new UserStore(this);
	styleStore = new StyleStore(this);
	postStore = new PostStore(this);
}

export const RootStoreContext = createContext(new RootStore());
