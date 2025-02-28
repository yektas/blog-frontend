import { Col, Result, Button } from 'antd';
import { Field, Form, Formik, FormikActions } from 'formik';
import { observer } from 'mobx-react-lite';
import * as React from 'react';

import { OutlineButton } from '../components/common/OutlineButton';
import { PostDetailsForm } from '../components/editor/PostDetailsForm';
import { PostTitleInput } from '../components/editor/PostTitleInput';
import { EditorLayout } from '../components/layout/EditorLayout';
import { useCreatePostMutation } from '../generated/graphql';
import { RootStoreContext } from '../store/RootStore';
import { PostEditor } from '../components/editor/PostEditor';
import { RouteComponentProps } from 'react-router';

interface FormValues {
	title: string;
}

export const NewPost: React.FC<RouteComponentProps> = observer(({ history }) => {
	const { postStore, userStore } = React.useContext(RootStoreContext);
	const [newPost] = useCreatePostMutation();
	const [detailFormVisible, setDetailFormVisible] = React.useState(false);
	const [postCreateStatus, setPostCreateStatus] = React.useState<'success' | 'error' | null>();

	const replaceParagraphType = (contentToFix: any) => {
		const json = JSON.stringify(contentToFix);
		const search = '"type":"paragraph"';
		const fix = '"type":"PARAGRAPH/PARAGRAPH"';
		const content = json.replace(new RegExp(search, 'g'), fix);
		postStore.setContent(JSON.parse(content));
		return content;
	};

	const handleSubmit = async (values: FormValues, actions: FormikActions<FormValues>) => {
		postStore.setTitle(values.title);
		actions.setSubmitting(false);

		//Fix paragraph serialization issue before posting #https://github.com/react-page/react-page/issues/498
		const content = replaceParagraphType(postStore.content);
		// const tags = postStore.tags.join();

		const response = await newPost({
			variables: {
				title: postStore.title,
				excerpt: postStore.excerpt,
				content: content,
				categoryId: postStore.categoryId,
				coverImage: postStore.coverImage
			}
		});

		setDetailFormVisible(false);
		if (response.data) {
			const result = response.data ? 'success' : 'error';
			setPostCreateStatus(result);
			console.log(response.data.createPost);
			renderPostCreationResult(result, response.data.createPost.slug);
		}
	};

	const handlePublish = (title: string) => {
		postStore.setTitle(title);
		setDetailFormVisible(true);
	};

	const renderPostCreationResult = (result: any, slug?: string) => {
		let title = '';
		let subTitle = '';
		if (result === 'success') {
			title = 'Your post has been saved. Great work!';
		} else {
			title = 'Something went wrong while saving the post.';
			subTitle = "Don't worry your work has been auto saved, maybe try again.";
		}
		return (
			<Result
				status={result}
				title={title}
				subTitle={subTitle}
				extra={
					result === 'success' && [
						<Button
							type="primary"
							//TODO redirect to the post via link
							key="console"
						>
							Go to the post
						</Button>
					]
				}
			/>
		);
	};

	return (
		<Formik
			initialValues={{
				title: ''
			}}
			onSubmit={(values, formikActions) => handleSubmit(values, formikActions)}
			render={(props) => (
				<EditorLayout>
					{postCreateStatus != null ? (
						renderPostCreationResult(postCreateStatus)
					) : (
						<Form>
							<PostDetailsForm
								visible={detailFormVisible}
								onCancel={() => setDetailFormVisible(false)}
								onPublish={() => props.submitForm()}
							/>
							<Col span={2} offset={16}>
								<OutlineButton type="primary" onClick={() => handlePublish(props.values.title)}>
									Ready to publish
								</OutlineButton>
							</Col>
							<Field
								style={{ marginLeft: 50, marginRight: 50 }}
								placeholder="Title"
								name="title"
								spellCheck="false"
								component={PostTitleInput}
							/>
							<PostEditor />
						</Form>
					)}
				</EditorLayout>
			)}
		/>
	);
});
