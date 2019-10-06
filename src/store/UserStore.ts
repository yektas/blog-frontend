import { action, observable } from 'mobx';

import { RootStore } from './RootStore';
import { UserType } from './UserType';

export class UserStore {
	rootStore: RootStore;
	constructor(rootStore: RootStore) {
		this.rootStore = rootStore;
	}

	@observable user = {} as UserType;

	@action
	setUser(user: UserType) {
		this.user = user;
	}
}
