import * as React from 'react';

import { SecondaryText } from '../../common/SecondaryText';

interface Props {}

export const Date: React.FC<Props> = ({ children }) => {
	return <SecondaryText bold>{children}</SecondaryText>;
};
