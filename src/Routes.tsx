import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { About } from './pages/About';
import { Home } from './pages/Home';
import { NewPost } from './pages/NewPost';
import { BlogPost } from './pages/BlogPost';
import { Blog } from './pages/Blog';
import { Page404 } from './pages/Page404';
import { Bye } from './pages/Bye';

export const Routes: React.FC = () => {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/blog" component={Blog} />
			<Route exact path="/blog/new-post" component={NewPost} />
			<Route path="/blog/post/:slug" component={BlogPost} />
			<Route component={Page404} />
		</Switch>
	);
};
