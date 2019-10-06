import { EditableType } from '@react-page/core/lib/types/editable';
import { action, observable } from 'mobx';
import { createContext } from 'react';

import { RootStore } from './RootStore';

export class PostStore {
	rootStore: RootStore;

	constructor(rootStore: RootStore) {
		this.rootStore = rootStore;
	}

	@observable title: string = '';
	@observable tags: string[] = [];
	@observable content: string | EditableType = '';
	@observable excerpt: string = '';
	@observable coverImage: string = '';
	@observable categoryId: number = -1;

	@action
	setContent(content: string | EditableType) {
		this.content = content;
	}

	@action
	setTitle(title: string) {
		this.title = title;
	}

	@action
	setExcerpt(excerpt: string) {
		this.excerpt = excerpt;
	}

	@action
	setTags(tags: any) {
		this.tags = tags;
	}

	@action
	setCoverImage(coverImage: string) {
		this.coverImage = coverImage;
	}

	@action
	setCategory(categoryId: number) {
		this.categoryId = categoryId;
	}
}
