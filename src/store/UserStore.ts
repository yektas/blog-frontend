import { action, observable } from 'mobx';

import { RootStore } from './RootStore';

export interface UserType {
	id: number;
	email: string;
	firstName?: string;
	lastName?: string;
}

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
