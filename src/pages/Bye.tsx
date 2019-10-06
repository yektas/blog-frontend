import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';

interface Props {}

export const Bye: React.FC<RouteComponentProps> = ({ history }) => {
	//const { data, loading, error } = useByeQuery({ fetchPolicy: 'network-only' });

	// if (loading) {
	// 	return <div>loading</div>;
	// }

	// if (error) {
	// 	console.log(error);
	// 	return <div>Error</div>;
	// }

	// if (!data) {
	// 	return <div>No data</div>;
	// }

	return <div>Bye</div>;
};
