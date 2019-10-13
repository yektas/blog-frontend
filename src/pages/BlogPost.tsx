import * as React from 'react';
import { format } from 'date-fns';
import { HomeLayout } from '../components/layout/HomeLayout';
import { SecondaryText } from '../components/common/SecondaryText';
import { PostLayout } from '../components/layout/PostLayout';
import { useGetPostQuery } from '../generated/graphql';
import { observer } from 'mobx-react-lite';
import { RootStoreContext } from '../store/RootStore';
import { RouteComponentProps } from 'react-router';

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

	return (
		<HomeLayout showHeader>
			{data && (
				<PostLayout>
					<h1>{data.getPost.title}</h1>
					<SecondaryText>
						by
						<SecondaryText bold>
							{data.getPost.author.firstName} {data.getPost.author.lastName}
						</SecondaryText>{' '}
						on {format(data.getPost.publishedOn, 'MMM DD, YYYY')}
					</SecondaryText>
					{/*<Image slug={post.slug} image={post.image} tag="Javascript" />*/}
					{/* <div style={{ textAlign: 'center', marginBottom: 30 }}>
                <img
                    style={{ maxWidth: 800 }}
                    src={data.post.image}
                    alt="cover"
                />
            </div> */}
					{/*{renderPost(post.content)}*/}
					{/*<CommentAntd />*/}
				</PostLayout>
			)}
		</HomeLayout>
	);
};
