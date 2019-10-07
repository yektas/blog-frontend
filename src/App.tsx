import './App.css';

import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { setAccessToken } from './accessToken';
import { useMeQuery } from './generated/graphql';
import { Routes } from './Routes';
import { RootStoreContext } from './store/RootStore';

interface Props {}

export const App: React.FC<Props> = observer(() => {
	const { styleStore } = React.useContext(RootStoreContext);
	const { data } = useMeQuery();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		//Set default theme to light
		styleStore.setTheme('light');
	});

	useEffect(() => {
		fetch('http://localhost:4000/refresh_token', {
			method: 'POST',
			credentials: 'include'
		}).then(async (x) => {
			const { accessToken } = await x.json();
			setAccessToken(accessToken);
			setLoading(false);
		});
	}, []);

	if (loading) {
		return <div>loading...</div>;
	}
	return (
		<Router>
			<Routes />
		</Router>
	);
});
