import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { About } from './pages/About';
import { Home } from './pages/Home';
import { NewPost } from './pages/NewPost';
import { BlogPost } from './pages/BlogPost';
import { Blog } from './pages/Blog';

export const Routes: React.FC = () => {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/about" component={About} />
			<Route exact path="/blog" components={Blog} />
			<Route exact path="/blog/new-post" component={NewPost} />
			{/*<Route exact path="/portfolio" component={Portfolio} />*/}
			<Route path="/blog/post/:slug" component={BlogPost} />
			{/* <Route component={Page404} /> */}
			{/* <Route exact path="/blog/posts" component={Posts} /> */}
		</Switch>
	);
};
