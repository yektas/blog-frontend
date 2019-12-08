import * as React from 'react';
import { format } from 'date-fns';
import { BlogLayout } from '../components/layout/BlogLayout';
import { SecondaryText } from '../components/common/SecondaryText';
import { PostLayout } from '../components/layout/PostLayout';
import { useGetPostQuery } from '../generated/graphql';
import { Image } from '../components/post/components/Image';
import { observer } from 'mobx-react-lite';
import { RootStoreContext } from '../store/RootStore';
import { RouteComponentProps } from 'react-router';
import Editor from '@react-page/editor';
import { EditableType } from '@react-page/core/lib/types/editable';
import { imagePlugin } from '@react-page/plugins-image';
import spacer from '@react-page/plugins-spacer';
import slate from '@react-page/plugins-slate';
import video from '@react-page/plugins-video';
import divider from '@react-page/plugins-divider';
import '@react-page/core/lib/index.css';
import '@react-page/plugins-slate/lib/index.css';
import '../components/editor/editor.css';

interface Props extends RouteComponentProps {}

interface Params {
	slug: string;
}

export const BlogPost: React.FC<Props> = ({ match }) => {
	const { slug } = match.params as Params;
	const postId = slug.match('[0-9]+$');
	const { data, loading, error } = useGetPostQuery({
		variables: {
			id: Number(postId)
		}
	});

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Post not found</div>;
	}

	const renderPost = (content: any) => {
		const editorContent = JSON.parse(content);
		const editorPlugins = {
			content: [slate(), imagePlugin(), video, spacer, divider]
		};

		return <Editor value={editorContent} plugins={editorPlugins} readOnly />;
	};

	return (
		<BlogLayout showHeader>
			{data && (
				<PostLayout>
					<h1>{data.getPost.title}</h1>
					<SecondaryText>
						by{' '}
						<SecondaryText bold>
							{data.getPost.author.firstName} {data.getPost.author.lastName}
						</SecondaryText>{' '}
						on {format(data.getPost.publishedOn, 'MMM DD, YYYY')}
					</SecondaryText>
					<Image
						clickable={false}
						slug={data.getPost.slug}
						image={data.getPost.image}
						tag="Javascript"
					/>
					{/* <div style={{ textAlign: 'center', marginBottom: 30 }}>
                <img
                    style={{ maxWidth: 800 }}
                    src={data.post.image}
                    alt="cover"
                />
            </div> */}
					{renderPost(data.getPost.content)}
					{/*<CommentAntd />*/}
				</PostLayout>
			)}
		</BlogLayout>
	);
};
