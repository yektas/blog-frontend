import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { About } from './pages/About';
import { Home } from './pages/Home';
import { NewPost } from './pages/NewPost';

export const Routes: React.FC = () => {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/about" component={About} />
			<Route exact path="/blog/new-post" component={NewPost} />
			{/* 
					<Route exact path="/portfolio" component={Portfolio} />
					
					{/* <Route exact path="/blog/posts" component={Posts} />
					<Route path="/blog/post/:slug" component={Post} />
					<Route component={Page404} /> */}
		</Switch>
	);
};
